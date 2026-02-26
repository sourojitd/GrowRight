// ─── User ─────────────────────────────────────────────
export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: 'PARENT' | 'ADMIN';
  subscriptionTier: 'FREE' | 'PRO' | 'PREMIUM';
  emailVerified: boolean;
  createdAt: string;
  subscription?: Subscription;
  _count?: { children: number; roadmaps: number };
}

export interface Subscription {
  id: string;
  plan: 'FREE' | 'PRO' | 'PREMIUM';
  status: 'ACTIVE' | 'PAST_DUE' | 'CANCELLED' | 'EXPIRED';
  startedAt: string;
  expiresAt?: string;
}

// ─── Auth ─────────────────────────────────────────────
export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
}

// ─── Child ────────────────────────────────────────────
export interface Child {
  id: string;
  name: string;
  dateOfBirth: string;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  avatarUrl?: string;
  notes?: string;
  bloodGroup?: string;
  ageMonths: number;
  ageFormatted: string;
  achievedMilestones?: number;
  completedActivities?: number;
  createdAt: string;
}

// ─── Milestone ────────────────────────────────────────
export type MilestoneCategory = 'MOTOR' | 'COGNITIVE' | 'SPEECH' | 'SOCIAL' | 'EMOTIONAL';
export type MilestoneStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'ACHIEVED';

export interface Milestone {
  id: string;
  category: MilestoneCategory;
  title: string;
  description: string;
  ageRangeStartMonth: number;
  ageRangeEndMonth: number;
  importanceLevel: 'CRITICAL' | 'NORMAL' | 'OPTIONAL';
  tips?: string;
  // Tracking fields (when queried per-child)
  status?: MilestoneStatus;
  achievedDate?: string;
  notes?: string;
  isUpcoming?: boolean;
  isOverdue?: boolean;
}

export interface MilestoneProgress {
  category: MilestoneCategory;
  total: number;
  achieved: number;
  percentage: number;
}

// ─── Activity ─────────────────────────────────────────
export interface Activity {
  id: string;
  category: MilestoneCategory;
  title: string;
  description: string;
  instructions?: string;
  minAgeMonths: number;
  maxAgeMonths: number;
  durationMinutes?: number;
  materials: string[];
  isCompleted?: boolean;
}

// ─── Toy ─────────────────────────────────────────────
export interface Toy {
  id: string;
  category: MilestoneCategory;
  title: string;
  description: string;
  minAgeMonths: number;
  maxAgeMonths: number;
  suggestedActivities: string[];
  materials: string[];
  purchaseUrl?: string;
  isSaved?: boolean;
}

// ─── Syllabus ─────────────────────────────────────────
export type SyllabusBoard = 'CBSE' | 'ICSE' | 'IB';

export interface SyllabusOptions {
  boards: SyllabusBoard[];
  grades: number[];
  subjects: string[];
  syllabi: { board: SyllabusBoard; grade: number; subject: string }[];
}

export interface BoardComparisonSummary {
  grade: number;
  overview: string;
  boardStrengths: Record<string, string[]>;
  recommendation: string;
}

export interface SyllabusTopic {
  id: string;
  topicName: string;
  subtopics: string[];
  depthLevel: number;
  learningObjectives?: string;
  orderIndex: number;
}

export interface Syllabus {
  id: string;
  board: SyllabusBoard;
  grade: number;
  subject: string;
  topics: SyllabusTopic[];
}

export interface SyllabusComparison {
  subject: string;
  grade: number;
  boards: {
    board: string;
    originalSubject?: string;
    topics: SyllabusTopic[];
  }[];
  insights: {
    topicCoverage: Record<string, string[]>;
    depthComparison: Record<string, Record<string, number>>;
    uniqueTopics: Record<string, string[]>;
  };
  comparisonSummary?: BoardComparisonSummary;
}

// ─── Roadmap ──────────────────────────────────────────
export interface Roadmap {
  id: string;
  childId: string;
  title: string;
  description?: string;
  generatedBy: 'MANUAL' | 'AI';
  content: RoadmapContent;
  status: 'ACTIVE' | 'COMPLETED' | 'ARCHIVED';
  createdAt: string;
  child?: Child;
}

export interface RoadmapContent {
  summary: string;
  generatedAt: string;
  sections: RoadmapSection[];
}

export interface RoadmapSection {
  title: string;
  description: string;
  durationWeeks: number;
  activities: RoadmapActivity[];
}

export interface RoadmapActivity {
  name: string;
  description: string;
  category: MilestoneCategory;
  frequency: string;
  materials?: string[];
}

// ─── API ──────────────────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  meta?: PaginationMeta;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// ─── Admin ────────────────────────────────────────────
export interface AdminStats {
  totalUsers: number;
  totalChildren: number;
  totalMilestonesTracked: number;
  totalActivitiesCompleted: number;
  totalRoadmaps: number;
  usersByTier: { tier: string; count: number }[];
  recentSignups: number;
}
