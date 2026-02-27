import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Layers, Star, Lightbulb } from 'lucide-react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiGet, apiPost } from '@/lib/api';
import Card from '@/components/ui/Card';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { PageSpinner } from '@/components/ui/Spinner';
import { getDepthLabel, getDepthColor } from '@/lib/utils';
import type { SyllabusOptions, SyllabusComparison, SyllabusBoard } from '@/types';
import SEO from '@/components/shared/SEO';

export default function SyllabusPage() {
  const [selectedBoards, setSelectedBoards] = useState<SyllabusBoard[]>(['CBSE', 'ICSE']);
  const [selectedGrade, setSelectedGrade] = useState('1');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');

  const { data: options, isLoading: optionsLoading } = useQuery({
    queryKey: ['syllabus', 'options'],
    queryFn: () => apiGet<SyllabusOptions>('/syllabus/options'),
  });

  const compareMutation = useMutation({
    mutationFn: () =>
      apiPost<SyllabusComparison>('/syllabus/compare', {
        boards: selectedBoards,
        grade: parseInt(selectedGrade),
        subject: selectedSubject,
      }),
  });

  const comparison = compareMutation.data as SyllabusComparison | undefined;

  // Filter subjects based on selected boards + grade
  const filteredSubjects = useMemo(() => {
    if (!options?.syllabi) return [];
    return [
      ...new Set(
        options.syllabi
          .filter(
            (s) =>
              selectedBoards.includes(s.board) &&
              s.grade === parseInt(selectedGrade)
          )
          .map((s) => s.subject)
      ),
    ].sort();
  }, [options?.syllabi, selectedBoards, selectedGrade]);

  // Auto-select first subject when filters change
  useEffect(() => {
    if (filteredSubjects.length > 0 && !filteredSubjects.includes(selectedSubject)) {
      setSelectedSubject(filteredSubjects[0] ?? '');
    }
  }, [filteredSubjects]);

  if (optionsLoading) return <PageSpinner />;

  const handleCompare = () => {
    if (selectedBoards.length >= 2) {
      compareMutation.mutate();
    }
  };

  const toggleBoard = (board: SyllabusBoard) => {
    setSelectedBoards((prev) =>
      prev.includes(board) ? prev.filter((b) => b !== board) : [...prev, board]
    );
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <SEO title="Syllabus Comparator" description="Compare school curricula across CBSE, ICSE, and IB education boards from Class 1 to 12." path="/syllabus" />
      <div>
        <h1 className="text-display-sm text-text-primary">Syllabus Comparator</h1>
        <p className="text-body text-text-secondary mt-1">
          Compare curriculum across CBSE, ICSE, and IB boards
        </p>
      </div>

      {/* Filters */}
      <Card variant="elevated">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
          <div className="space-y-2">
            <label className="text-subhead font-medium text-text-primary">Boards</label>
            <div className="flex gap-2">
              {(['CBSE', 'ICSE', 'IB'] as SyllabusBoard[]).map((board) => (
                <motion.button
                  key={board}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggleBoard(board)}
                  className={`px-3 py-2 rounded-lg text-subhead font-medium transition-all duration-200 ${
                    selectedBoards.includes(board)
                      ? 'bg-accent-blue text-white shadow-glow-blue'
                      : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
                  }`}
                >
                  {board}
                </motion.button>
              ))}
            </div>
          </div>

          <Select
            label="Grade"
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            options={
              options?.grades.map((g) => ({ value: String(g), label: `Class ${g}` })) || []
            }
          />

          <Select
            label="Subject"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            options={
              filteredSubjects.map((s) => ({ value: s, label: s }))
            }
          />

          <Button
            variant="gradient"
            onClick={handleCompare}
            isLoading={compareMutation.isPending}
            disabled={selectedBoards.length < 2}
          >
            <Layers className="w-4 h-4" />
            Compare
          </Button>
        </div>
      </Card>

      {/* Comparison Results */}
      {comparison && (
        <AnimatedSection>
          <div className="space-y-6">
            <h2 className="text-title text-text-primary">
              {comparison.subject} — Class {comparison.grade}
            </h2>

            {/* Side-by-side boards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {comparison.boards.map((board, idx) => (
                <AnimatedSection key={board.board} delay={idx * 0.1}>
                  <Card variant="elevated">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-headline text-text-primary">{board.board}</h3>
                        {board.originalSubject && (
                          <p className="text-caption text-text-tertiary mt-0.5">
                            {board.originalSubject}
                          </p>
                        )}
                      </div>
                      <Badge variant="blue">{board.topics.length} topics</Badge>
                    </div>

                    <div className="space-y-3">
                      {board.topics.map((topic, tidx) => (
                        <div
                          key={tidx}
                          className="p-3 rounded-xl bg-surface-secondary"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-subhead font-medium text-text-primary">
                              {topic.topicName}
                            </h4>
                            <Badge className={getDepthColor(topic.depthLevel)}>
                              {getDepthLabel(topic.depthLevel)}
                            </Badge>
                          </div>

                          {Array.isArray(topic.subtopics) && topic.subtopics.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {(topic.subtopics as string[]).map((sub, i) => (
                                <span
                                  key={i}
                                  className="text-caption bg-white px-2 py-0.5 rounded-md text-text-secondary"
                                >
                                  {sub}
                                </span>
                              ))}
                            </div>
                          )}

                          {topic.learningObjectives && (
                            <p className="text-caption text-text-tertiary mt-2">
                              {topic.learningObjectives}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Insights */}
            {comparison.insights && (
              <AnimatedSection delay={0.3}>
                <Card variant="elevated">
                  <h3 className="text-headline text-text-primary mb-4">Comparison Insights</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Depth comparison */}
                    <div>
                      <h4 className="text-subhead font-medium text-text-primary mb-3">
                        Topic Depth Comparison
                      </h4>
                      <div className="space-y-2">
                        {Object.entries(comparison.insights.depthComparison).map(
                          ([topic, boards]) => (
                            <div key={topic} className="flex items-center gap-3">
                              <span className="text-caption text-text-secondary flex-1 truncate">
                                {topic}
                              </span>
                              {Object.entries(boards).map(([board, depth]) => (
                                <Badge key={board} className={getDepthColor(depth)}>
                                  {board}: {getDepthLabel(depth)}
                                </Badge>
                              ))}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Unique topics */}
                    <div>
                      <h4 className="text-subhead font-medium text-text-primary mb-3">
                        Unique Topics per Board
                      </h4>
                      {Object.entries(comparison.insights.uniqueTopics).map(
                        ([board, topics]) => (
                          <div key={board} className="mb-3">
                            <p className="text-caption font-medium text-text-primary mb-1">
                              {board}
                            </p>
                            {topics.length > 0 ? (
                              <div className="flex flex-wrap gap-1">
                                {topics.map((t, i) => (
                                  <Badge key={i} variant="purple">
                                    {t}
                                  </Badge>
                                ))}
                              </div>
                            ) : (
                              <p className="text-caption text-text-tertiary">
                                No unique topics
                              </p>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            )}

            {/* Board Comparison Summary */}
            {comparison.comparisonSummary && (
              <AnimatedSection delay={0.4}>
                <Card variant="elevated">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-accent-yellow" />
                    <h3 className="text-headline text-text-primary">
                      Board Comparison — Class {comparison.grade}
                    </h3>
                  </div>

                  <p className="text-body text-text-secondary mb-6">
                    {comparison.comparisonSummary.overview}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {Object.entries(comparison.comparisonSummary.boardStrengths).map(
                      ([board, strengths]) => (
                        <div
                          key={board}
                          className="p-4 rounded-xl bg-surface-secondary"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <Star className="w-4 h-4 text-accent-yellow" />
                            <h4 className="text-subhead font-semibold text-text-primary">
                              {board} Strengths
                            </h4>
                          </div>
                          <ul className="space-y-2">
                            {strengths.map((s, i) => (
                              <li
                                key={i}
                                className="text-caption text-text-secondary flex gap-2"
                              >
                                <span className="text-accent-green mt-0.5 shrink-0">•</span>
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/10">
                    <p className="text-subhead text-text-primary font-medium mb-1">
                      Recommendation
                    </p>
                    <p className="text-body text-text-secondary">
                      {comparison.comparisonSummary.recommendation}
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            )}
          </div>
        </AnimatedSection>
      )}

      {!comparison && !compareMutation.isPending && (
        <div className="text-center py-16">
          <BookOpen className="w-12 h-12 text-text-tertiary mx-auto mb-4" />
          <p className="text-body text-text-secondary">
            Select boards, grade, and subject, then click Compare
          </p>
        </div>
      )}
    </motion.div>
  );
}
