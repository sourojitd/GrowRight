import { Request } from 'express';

// ─── Roles ────────────────────────────────────────────
export enum UserRole {
  PARENT = 'PARENT',
  ADMIN = 'ADMIN',
}

export enum SubscriptionTier {
  FREE = 'FREE',
  PRO = 'PRO',
  PREMIUM = 'PREMIUM',
}

// ─── Auth ─────────────────────────────────────────────
export interface JwtPayload {
  userId: string;
  email: string;
  role: UserRole;
}

export interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

// ─── API Responses ────────────────────────────────────
export interface ApiResponse<T = unknown> {
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

export interface PaginationQuery {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// ─── Milestone Categories ─────────────────────────────
export enum MilestoneCategory {
  MOTOR = 'MOTOR',
  COGNITIVE = 'COGNITIVE',
  SPEECH = 'SPEECH',
  SOCIAL = 'SOCIAL',
  EMOTIONAL = 'EMOTIONAL',
}

export enum MilestoneStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  ACHIEVED = 'ACHIEVED',
}

// ─── Syllabus Boards ──────────────────────────────────
export enum SyllabusBoard {
  CBSE = 'CBSE',
  ICSE = 'ICSE',
  IB = 'IB',
}

// ─── AI Roadmap ───────────────────────────────────────
export interface RoadmapSection {
  title: string;
  description: string;
  activities: RoadmapActivity[];
  durationWeeks: number;
}

export interface RoadmapActivity {
  name: string;
  description: string;
  category: MilestoneCategory;
  frequency: string;
  materials?: string[];
}

export interface GeneratedRoadmap {
  sections: RoadmapSection[];
  summary: string;
  generatedAt: string;
}
