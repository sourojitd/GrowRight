import { Prisma } from '@prisma/client';
import { prisma } from '../../config/database';
import { cacheService } from '../../services/cache.service';
import { NotFoundError, ForbiddenError } from '../../middleware/errorHandler';
import { calculateAgeInMonths } from '../../utils/helpers';
import { cacheKey } from '../../utils/helpers';
import { CACHE_TTL } from '../../utils/constants';
import { MilestoneCategory, MilestoneStatus } from '../../types';

class MilestonesService {
  /**
   * Get all reference milestones, optionally filtered by category and age.
   */
  async getMilestones(filters?: {
    category?: MilestoneCategory;
    ageMonths?: number;
  }) {
    const key = cacheKey('milestones', filters?.category || 'all', filters?.ageMonths || 'all');
    const cached = await cacheService.get(key);
    if (cached) return cached;

    const where: Prisma.MilestoneWhereInput = {};

    if (filters?.category) {
      where.category = filters.category;
    }

    if (filters?.ageMonths !== undefined) {
      where.ageRangeStartMonth = { lte: filters.ageMonths };
      where.ageRangeEndMonth = { gte: filters.ageMonths };
    }

    const milestones = await prisma.milestone.findMany({
      where,
      orderBy: [{ ageRangeStartMonth: 'asc' }, { category: 'asc' }],
    });

    await cacheService.set(key, milestones, CACHE_TTL.MILESTONES);
    return milestones;
  }

  /**
   * Get milestones for a specific child, with their tracking status.
   */
  async getChildMilestones(childId: string, userId: string) {
    // Verify ownership
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const ageMonths = calculateAgeInMonths(child.dateOfBirth);

    // Get all milestones up to the child's age + 3 months ahead
    const milestones = await prisma.milestone.findMany({
      where: {
        ageRangeStartMonth: { lte: ageMonths + 3 },
      },
      orderBy: [{ ageRangeStartMonth: 'asc' }, { category: 'asc' }],
    });

    // Get child's tracking data
    const tracked = await prisma.childMilestone.findMany({
      where: { childId },
    });

    const trackedMap = new Map(tracked.map((t) => [t.milestoneId, t]));

    return {
      child: {
        id: child.id,
        name: child.name,
        ageMonths,
      },
      milestones: milestones.map((m) => {
        const tracking = trackedMap.get(m.id);
        return {
          ...m,
          status: tracking?.status || 'NOT_STARTED',
          achievedDate: tracking?.achievedDate,
          notes: tracking?.notes,
          isUpcoming: m.ageRangeStartMonth > ageMonths,
          isOverdue:
            m.ageRangeEndMonth < ageMonths &&
            (!tracking || tracking.status !== 'ACHIEVED'),
        };
      }),
      summary: {
        total: milestones.length,
        achieved: tracked.filter((t) => t.status === 'ACHIEVED').length,
        inProgress: tracked.filter((t) => t.status === 'IN_PROGRESS').length,
        notStarted:
          milestones.length -
          tracked.filter((t) => t.status !== 'NOT_STARTED').length,
      },
    };
  }

  /**
   * Update a milestone's tracking status for a child.
   */
  async updateMilestoneStatus(
    childId: string,
    milestoneId: string,
    userId: string,
    data: { status: MilestoneStatus; notes?: string }
  ) {
    // Verify ownership
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    // Verify milestone exists
    const milestone = await prisma.milestone.findUnique({ where: { id: milestoneId } });
    if (!milestone) throw new NotFoundError('Milestone');

    const achievedDate =
      data.status === 'ACHIEVED' ? new Date() : undefined;

    const result = await prisma.childMilestone.upsert({
      where: {
        childId_milestoneId: { childId, milestoneId },
      },
      update: {
        status: data.status,
        notes: data.notes,
        ...(achievedDate && { achievedDate }),
      },
      create: {
        childId,
        milestoneId,
        status: data.status,
        notes: data.notes,
        ...(achievedDate && { achievedDate }),
      },
      include: { milestone: true },
    });

    return result;
  }

  /**
   * Get milestone progress summary across categories.
   */
  async getCategoryProgress(childId: string, userId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const ageMonths = calculateAgeInMonths(child.dateOfBirth);

    const categories = ['MOTOR', 'COGNITIVE', 'SPEECH', 'SOCIAL', 'EMOTIONAL'] as const;

    const progress = await Promise.all(
      categories.map(async (category) => {
        const total = await prisma.milestone.count({
          where: {
            category,
            ageRangeStartMonth: { lte: ageMonths },
          },
        });

        const achieved = await prisma.childMilestone.count({
          where: {
            childId,
            status: 'ACHIEVED',
            milestone: {
              category,
              ageRangeStartMonth: { lte: ageMonths },
            },
          },
        });

        return {
          category,
          total,
          achieved,
          percentage: total > 0 ? Math.round((achieved / total) * 100) : 0,
        };
      })
    );

    return progress;
  }
}

export const milestonesService = new MilestonesService();
