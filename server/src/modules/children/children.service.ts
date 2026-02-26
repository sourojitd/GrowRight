import { prisma } from '../../config/database';
import { NotFoundError, ForbiddenError, AppError } from '../../middleware/errorHandler';
import { featureFlagService } from '../../services/featureFlag.service';
import { PLAN_LIMITS, FLAG_FREE_VERSION } from '../../utils/constants';
import { calculateAgeInMonths, formatAge } from '../../utils/helpers';
import { CreateChildInput, UpdateChildInput } from './children.schema';
import { SubscriptionTier } from '../../types';

class ChildrenService {
  async getChildren(userId: string) {
    const children = await prisma.child.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: {
            childMilestones: { where: { status: 'ACHIEVED' } },
            childActivities: true,
          },
        },
      },
    });

    return children.map((child) => ({
      ...child,
      ageMonths: calculateAgeInMonths(child.dateOfBirth),
      ageFormatted: formatAge(calculateAgeInMonths(child.dateOfBirth)),
      achievedMilestones: child._count.childMilestones,
      completedActivities: child._count.childActivities,
    }));
  }

  async getChild(childId: string, userId: string) {
    const child = await prisma.child.findUnique({
      where: { id: childId },
      include: {
        childMilestones: {
          include: { milestone: true },
          orderBy: { milestone: { ageRangeStartMonth: 'asc' } },
        },
        childActivities: {
          include: { activity: true },
          orderBy: { completedAt: 'desc' },
          take: 10,
        },
        _count: {
          select: {
            childMilestones: { where: { status: 'ACHIEVED' } },
            childActivities: true,
            roadmaps: true,
          },
        },
      },
    });

    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const ageMonths = calculateAgeInMonths(child.dateOfBirth);

    return {
      ...child,
      ageMonths,
      ageFormatted: formatAge(ageMonths),
    };
  }

  async createChild(userId: string, input: CreateChildInput) {
    // Check subscription limit
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { _count: { select: { children: true } } },
    });

    if (!user) throw new NotFoundError('User');

    const isFreeVersion = await featureFlagService.isEnabled(FLAG_FREE_VERSION);

    if (!isFreeVersion) {
      const tier = user.subscriptionTier as keyof typeof PLAN_LIMITS;
      const limit = PLAN_LIMITS[tier].maxChildren;

      if (user._count.children >= limit) {
        throw new AppError(
          403,
          `You can add up to ${limit} children on your ${tier} plan. Upgrade for more.`
        );
      }
    }

    const child = await prisma.child.create({
      data: {
        userId,
        name: input.name,
        dateOfBirth: new Date(input.dateOfBirth),
        gender: input.gender as any,
        notes: input.notes,
        bloodGroup: input.bloodGroup,
      },
    });

    const ageMonths = calculateAgeInMonths(child.dateOfBirth);

    return {
      ...child,
      ageMonths,
      ageFormatted: formatAge(ageMonths),
    };
  }

  async updateChild(childId: string, userId: string, input: UpdateChildInput) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const updated = await prisma.child.update({
      where: { id: childId },
      data: {
        ...(input.name && { name: input.name }),
        ...(input.dateOfBirth && { dateOfBirth: new Date(input.dateOfBirth) }),
        ...(input.gender && { gender: input.gender as any }),
        ...(input.notes !== undefined && { notes: input.notes }),
        ...(input.bloodGroup !== undefined && { bloodGroup: input.bloodGroup }),
      },
    });

    return updated;
  }

  async deleteChild(childId: string, userId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    await prisma.child.delete({ where: { id: childId } });
  }
}

export const childrenService = new ChildrenService();
