import { prisma } from '../../config/database';
import { cacheService } from '../../services/cache.service';
import { NotFoundError, ForbiddenError } from '../../middleware/errorHandler';
import { calculateAgeInMonths } from '../../utils/helpers';
import { cacheKey } from '../../utils/helpers';
import { CACHE_TTL } from '../../utils/constants';
import { MilestoneCategory } from '../../types';

class ActivitiesService {
  /**
   * Get all activities, optionally filtered by category and age.
   */
  async getActivities(filters?: {
    category?: MilestoneCategory;
    ageMonths?: number;
  }) {
    const key = cacheKey('activities', filters?.category || 'all', filters?.ageMonths || 'all');
    const cached = await cacheService.get(key);
    if (cached) return cached;

    const where: any = {};

    if (filters?.category) {
      where.category = filters.category;
    }

    if (filters?.ageMonths !== undefined) {
      where.minAgeMonths = { lte: filters.ageMonths };
      where.maxAgeMonths = { gte: filters.ageMonths };
    }

    const activities = await prisma.activity.findMany({
      where,
      orderBy: [{ minAgeMonths: 'asc' }, { category: 'asc' }],
    });

    await cacheService.set(key, activities, CACHE_TTL.LONG);
    return activities;
  }

  /**
   * Get recommended activities for a child based on their age.
   */
  async getRecommendedForChild(childId: string, userId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const ageMonths = calculateAgeInMonths(child.dateOfBirth);

    // Activities appropriate for the child's age
    const activities = await prisma.activity.findMany({
      where: {
        minAgeMonths: { lte: ageMonths },
        maxAgeMonths: { gte: ageMonths },
      },
      orderBy: { category: 'asc' },
    });

    // Already completed activities
    const completed = await prisma.childActivity.findMany({
      where: { childId },
      select: { activityId: true },
    });
    const completedIds = new Set(completed.map((c) => c.activityId));

    return activities.map((a) => ({
      ...a,
      isCompleted: completedIds.has(a.id),
    }));
  }

  /**
   * Log an activity as completed for a child.
   */
  async logActivity(
    childId: string,
    activityId: string,
    userId: string,
    data?: { rating?: number; notes?: string }
  ) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const activity = await prisma.activity.findUnique({ where: { id: activityId } });
    if (!activity) throw new NotFoundError('Activity');

    return prisma.childActivity.create({
      data: {
        childId,
        activityId,
        rating: data?.rating,
        notes: data?.notes,
      },
      include: { activity: true },
    });
  }

  /**
   * Get activity history for a child.
   */
  async getHistory(childId: string, userId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    return prisma.childActivity.findMany({
      where: { childId },
      include: { activity: true },
      orderBy: { completedAt: 'desc' },
      take: 50,
    });
  }

  /**
   * Count activities that are fully below the child's current age and not yet completed.
   * "Fully below" means maxAgeMonths < child's ageMonths (the activity's age window has passed).
   */
  async getPastIncompleteCount(childId: string, userId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const ageMonths = calculateAgeInMonths(child.dateOfBirth);

    // All activities whose age window is fully past
    const pastActivities = await prisma.activity.findMany({
      where: { maxAgeMonths: { lt: ageMonths } },
      select: { id: true },
    });

    if (pastActivities.length === 0) return { count: 0, ageMonths };

    // Which of those are already completed
    const completed = await prisma.childActivity.findMany({
      where: {
        childId,
        activityId: { in: pastActivities.map((a) => a.id) },
      },
      select: { activityId: true },
    });
    const completedIds = new Set(completed.map((c) => c.activityId));

    const incompleteCount = pastActivities.filter((a) => !completedIds.has(a.id)).length;
    return { count: incompleteCount, ageMonths };
  }

  /**
   * Bulk-complete all activities that are fully below the child's current age.
   * Only creates records for activities not already completed.
   */
  async bulkCompletePast(childId: string, userId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const ageMonths = calculateAgeInMonths(child.dateOfBirth);

    const pastActivities = await prisma.activity.findMany({
      where: { maxAgeMonths: { lt: ageMonths } },
      select: { id: true },
    });

    if (pastActivities.length === 0) return { completed: 0 };

    const alreadyCompleted = await prisma.childActivity.findMany({
      where: {
        childId,
        activityId: { in: pastActivities.map((a) => a.id) },
      },
      select: { activityId: true },
    });
    const completedIds = new Set(alreadyCompleted.map((c) => c.activityId));

    const toComplete = pastActivities.filter((a) => !completedIds.has(a.id));

    if (toComplete.length === 0) return { completed: 0 };

    await prisma.childActivity.createMany({
      data: toComplete.map((a) => ({
        childId,
        activityId: a.id,
      })),
    });

    return { completed: toComplete.length };
  }
}

export const activitiesService = new ActivitiesService();
