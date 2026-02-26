import { DEFAULT_LIMIT, DEFAULT_PAGE, MAX_LIMIT } from './constants';
import { PaginationMeta, PaginationQuery } from '../types';

/**
 * Calculate age in months from a date of birth.
 */
export function calculateAgeInMonths(dateOfBirth: Date): number {
  const now = new Date();
  const months =
    (now.getFullYear() - dateOfBirth.getFullYear()) * 12 +
    (now.getMonth() - dateOfBirth.getMonth());
  return Math.max(0, months);
}

/**
 * Format age in months to human-readable string.
 */
export function formatAge(ageMonths: number): string {
  if (ageMonths < 1) return 'Newborn';
  if (ageMonths < 12) return `${ageMonths} month${ageMonths === 1 ? '' : 's'}`;

  const years = Math.floor(ageMonths / 12);
  const remainingMonths = ageMonths % 12;

  if (remainingMonths === 0) return `${years} year${years === 1 ? '' : 's'}`;
  return `${years}y ${remainingMonths}m`;
}

/**
 * Normalize pagination params from query string.
 */
export function normalizePagination(query: PaginationQuery) {
  const page = Math.max(1, query.page ?? DEFAULT_PAGE);
  const limit = Math.min(MAX_LIMIT, Math.max(1, query.limit ?? DEFAULT_LIMIT));
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ?? 'createdAt';
  const sortOrder = query.sortOrder ?? 'desc';

  return { page, limit, skip, sortBy, sortOrder };
}

/**
 * Build pagination metadata.
 */
export function buildPaginationMeta(
  total: number,
  page: number,
  limit: number
): PaginationMeta {
  return {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  };
}

/**
 * Omit sensitive fields from a user object.
 */
export function sanitizeUser<T extends Record<string, unknown>>(
  user: T,
  fields: string[] = ['passwordHash']
): Partial<T> {
  const sanitized = { ...user };
  for (const field of fields) {
    delete sanitized[field];
  }
  return sanitized;
}

/**
 * Sleep helper for retries.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generate a deterministic cache key.
 */
export function cacheKey(...parts: (string | number)[]): string {
  return `growright:${parts.join(':')}`;
}
