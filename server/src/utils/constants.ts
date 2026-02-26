// GrowRight Constants — Sourojit D

// ─── Pagination ───────────────────────────────────────
export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 20;
export const MAX_LIMIT = 100;

// ─── Age Ranges ───────────────────────────────────────
export const MIN_CHILD_AGE_MONTHS = 0;
export const MAX_CHILD_AGE_MONTHS = 60; // 5 years
export const EXTENDED_MAX_AGE_MONTHS = 120; // 10 years future

// ─── Cache TTLs (seconds) ─────────────────────────────
export const CACHE_TTL = {
  SHORT: 60,            // 1 min
  MEDIUM: 300,          // 5 min
  LONG: 3600,           // 1 hour
  MILESTONES: 86400,    // 24 hours (reference data)
  SYLLABUS: 86400,      // 24 hours (reference data)
  USER_SESSION: 900,    // 15 min
} as const;

// ─── Feature Flag Names ──────────────────────────────
export const FLAG_FREE_VERSION = 'free_version';

// ─── Subscription Limits (enforced only in paid mode) ─
export const PLAN_LIMITS = {
  FREE: {
    maxChildren: 1,
    maxRoadmapsPerMonth: 1,
    syllabusAccess: false,
    aiFeatures: false,
  },
  PRO: {
    maxChildren: 5,
    maxRoadmapsPerMonth: 10,
    syllabusAccess: true,
    aiFeatures: false,
  },
  PREMIUM: {
    maxChildren: 10,
    maxRoadmapsPerMonth: -1, // unlimited
    syllabusAccess: true,
    aiFeatures: true,
  },
} as const;

// ─── Grades ───────────────────────────────────────────
export const GRADES = Array.from({ length: 12 }, (_, i) => i + 1);

// ─── Subjects ─────────────────────────────────────────
export const CORE_SUBJECTS = [
  'Mathematics',
  'Science',
  'English',
  'Social Studies',
  'Hindi',
] as const;
