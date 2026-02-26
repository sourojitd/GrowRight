import { prisma } from '../../config/database';
import { cacheService } from '../../services/cache.service';
import { cacheKey } from '../../utils/helpers';
import { CACHE_TTL } from '../../utils/constants';
import { SyllabusBoard } from '../../types';
import { boardComparisons } from '../../../prisma/data/syllabus/comparisons';

// ─── Subject Normalization ───────────────────────────────
// Maps board-specific subject names to generic canonical names
// so that equivalent subjects across boards can be compared.
const SUBJECT_NORMALIZE: Record<string, string> = {
  // IB MYP (6-10)
  'English Language & Literature': 'English',
  'Hindi Language Acquisition': 'Hindi',
  'Sciences': 'Science',
  'Individuals and Societies': 'Social Studies',
  // IB DP (11-12)
  'Mathematics: Analysis and Approaches (HL/SL)': 'Mathematics',
  'English A: Language and Literature (HL/SL)': 'English',
  'Physics (HL/SL)': 'Physics',
  'Chemistry (HL/SL)': 'Chemistry',
  'Biology (HL/SL)': 'Biology',
  'Hindi B (SL)': 'Hindi',
  // ICSE primary
  'EVS/Science': 'EVS',
};

// Build reverse map: for a given canonical name, find possible board-specific names
const REVERSE_MAP: Record<string, string[]> = {};
for (const [specific, canonical] of Object.entries(SUBJECT_NORMALIZE)) {
  if (!REVERSE_MAP[canonical]) REVERSE_MAP[canonical] = [];
  REVERSE_MAP[canonical].push(specific);
}

function normalizeSubject(subject: string): string {
  return SUBJECT_NORMALIZE[subject] || subject;
}

// ─── Types ───────────────────────────────────────────────

interface ComparisonResult {
  subject: string;
  grade: number;
  boards: {
    board: string;
    originalSubject?: string;
    topics: {
      topicName: string;
      subtopics: unknown;
      depthLevel: number;
      learningObjectives: string | null;
    }[];
  }[];
  insights: {
    topicCoverage: Record<string, string[]>;
    depthComparison: Record<string, Record<string, number>>;
    uniqueTopics: Record<string, string[]>;
  };
  comparisonSummary?: {
    grade: number;
    overview: string;
    boardStrengths: Record<string, string[]>;
    recommendation: string;
  };
}

class SyllabusService {
  /**
   * Get available boards, subjects, and grades.
   * Subjects are normalized so IB-specific names appear as generic equivalents.
   */
  async getAvailableOptions() {
    const key = cacheKey('syllabus', 'options');
    const cached = await cacheService.get(key);
    if (cached) return cached;

    const syllabi = await prisma.syllabus.findMany({
      select: { board: true, grade: true, subject: true },
      distinct: ['board', 'grade', 'subject'],
      orderBy: [{ board: 'asc' }, { grade: 'asc' }, { subject: 'asc' }],
    });

    // Normalize subjects for the dropdown
    const normalizedSyllabi = syllabi.map((s) => ({
      ...s,
      subject: normalizeSubject(s.subject),
    }));

    const boards = [...new Set(syllabi.map((s) => s.board))];
    const grades = [...new Set(syllabi.map((s) => s.grade))].sort((a, b) => a - b);
    const subjects = [...new Set(normalizedSyllabi.map((s) => s.subject))].sort();

    const result = { boards, grades, subjects, syllabi: normalizedSyllabi };
    await cacheService.set(key, result, CACHE_TTL.SYLLABUS);
    return result;
  }

  /**
   * Get syllabus for a specific board/grade/subject.
   * Tries the exact subject name first, then board-specific variants.
   */
  async getSyllabus(board: SyllabusBoard, grade: number, subject: string) {
    const key = cacheKey('syllabus', board, grade, subject);
    const cached = await cacheService.get(key);
    if (cached) return cached;

    // Try exact match first
    let syllabus = await prisma.syllabus.findUnique({
      where: { board_grade_subject: { board, grade, subject } },
      include: {
        topics: { orderBy: { orderIndex: 'asc' } },
      },
    });

    // If no match, try board-specific variants of this canonical name
    if (!syllabus) {
      const variants = REVERSE_MAP[subject] || [];
      for (const variant of variants) {
        syllabus = await prisma.syllabus.findUnique({
          where: { board_grade_subject: { board, grade, subject: variant } },
          include: {
            topics: { orderBy: { orderIndex: 'asc' } },
          },
        });
        if (syllabus) break;
      }
    }

    if (syllabus) {
      await cacheService.set(key, syllabus, CACHE_TTL.SYLLABUS);
    }

    return syllabus;
  }

  /**
   * Compare syllabi across multiple boards for the same grade and subject.
   */
  async compareSyllabi(
    boards: SyllabusBoard[],
    grade: number,
    subject: string
  ): Promise<ComparisonResult> {
    const syllabi = await Promise.all(
      boards.map(async (board) => {
        const data = await this.getSyllabus(board, grade, subject);
        return { board, data };
      })
    );

    const boardsData = syllabi
      .filter((s) => s.data)
      .map((s) => {
        const actualSubject = s.data!.subject;
        const isRenamed = actualSubject !== subject;
        return {
          board: s.board,
          ...(isRenamed ? { originalSubject: actualSubject } : {}),
          topics: s.data!.topics.map((t) => ({
            topicName: t.topicName,
            subtopics: t.subtopics,
            depthLevel: t.depthLevel,
            learningObjectives: t.learningObjectives,
          })),
        };
      });

    // Generate comparison insights
    const insights = this.generateInsights(boardsData);

    // Attach grade-level comparison summary
    const comparisonSummary = boardComparisons.find((c) => c.grade === grade);

    return {
      subject,
      grade,
      boards: boardsData,
      insights,
      comparisonSummary,
    };
  }

  // ─── Private ────────────────────────────────────────

  private generateInsights(
    boardsData: {
      board: string;
      topics: { topicName: string; subtopics: unknown; depthLevel: number }[];
    }[]
  ) {
    // Which topics are covered by which boards
    const topicCoverage: Record<string, string[]> = {};
    const depthComparison: Record<string, Record<string, number>> = {};
    const uniqueTopics: Record<string, string[]> = {};

    for (const board of boardsData) {
      const boardTopicNames = board.topics.map((t) => t.topicName);
      uniqueTopics[board.board] = [];

      for (const topic of board.topics) {
        // Track coverage
        if (!topicCoverage[topic.topicName]) {
          topicCoverage[topic.topicName] = [];
        }
        topicCoverage[topic.topicName].push(board.board);

        // Track depth
        if (!depthComparison[topic.topicName]) {
          depthComparison[topic.topicName] = {};
        }
        depthComparison[topic.topicName][board.board] = topic.depthLevel;
      }

      // Find unique topics for this board
      for (const topicName of boardTopicNames) {
        const coveredBy = boardsData.filter((b) =>
          b.topics.some((t) => t.topicName === topicName)
        );
        if (coveredBy.length === 1) {
          uniqueTopics[board.board].push(topicName);
        }
      }
    }

    return { topicCoverage, depthComparison, uniqueTopics };
  }
}

export const syllabusService = new SyllabusService();
