import { prisma } from '../../config/database';
import { NotFoundError, ForbiddenError, AppError } from '../../middleware/errorHandler';
import { aiService } from '../../services/ai.service';
import { featureFlagService } from '../../services/featureFlag.service';
import { calculateAgeInMonths } from '../../utils/helpers';
import { PLAN_LIMITS, FLAG_FREE_VERSION } from '../../utils/constants';

class RoadmapService {
  async getRoadmaps(childId: string, userId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    return prisma.roadmap.findMany({
      where: { childId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getRoadmap(roadmapId: string, userId: string) {
    const roadmap = await prisma.roadmap.findUnique({
      where: { id: roadmapId },
      include: { child: true },
    });

    if (!roadmap) throw new NotFoundError('Roadmap');
    if (roadmap.userId !== userId) throw new ForbiddenError();

    return roadmap;
  }

  async generateRoadmap(childId: string, userId: string, focusAreas?: string[]) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    // Check subscription limits
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundError('User');

    const isFreeVersion = await featureFlagService.isEnabled(FLAG_FREE_VERSION);

    if (!isFreeVersion) {
      const tier = user.subscriptionTier as keyof typeof PLAN_LIMITS;
      const limit = PLAN_LIMITS[tier].maxRoadmapsPerMonth;

      if (limit !== -1) {
        const thisMonth = new Date();
        thisMonth.setDate(1);
        thisMonth.setHours(0, 0, 0, 0);

        const count = await prisma.roadmap.count({
          where: {
            userId,
            createdAt: { gte: thisMonth },
          },
        });

        if (count >= limit) {
          throw new AppError(
            403,
            `You've reached your ${limit} roadmap${limit === 1 ? '' : 's'}/month limit. Upgrade for more.`
          );
        }
      }
    }

    const ageMonths = calculateAgeInMonths(child.dateOfBirth);

    // Get completed milestones
    const completedMilestones = await prisma.childMilestone.findMany({
      where: { childId, status: 'ACHIEVED' },
      include: { milestone: true },
    });

    // Generate roadmap (uses AI service abstraction)
    const generated = await aiService.generateRoadmap({
      childName: child.name,
      ageMonths,
      completedMilestones: completedMilestones.map((cm) => cm.milestone.title),
      focusAreas: focusAreas as any,
    });

    // Save to database
    const roadmap = await prisma.roadmap.create({
      data: {
        childId,
        userId,
        title: `Development Plan – ${child.name} (${ageMonths}m)`,
        description: generated.summary,
        generatedBy: aiService.isEnabled ? 'AI' : 'MANUAL',
        content: generated as any,
        status: 'ACTIVE',
      },
    });

    return roadmap;
  }

  async updateStatus(roadmapId: string, userId: string, status: string) {
    const roadmap = await prisma.roadmap.findUnique({ where: { id: roadmapId } });
    if (!roadmap) throw new NotFoundError('Roadmap');
    if (roadmap.userId !== userId) throw new ForbiddenError();

    return prisma.roadmap.update({
      where: { id: roadmapId },
      data: { status: status as any },
    });
  }

  async deleteRoadmap(roadmapId: string, userId: string) {
    const roadmap = await prisma.roadmap.findUnique({ where: { id: roadmapId } });
    if (!roadmap) throw new NotFoundError('Roadmap');
    if (roadmap.userId !== userId) throw new ForbiddenError();

    await prisma.roadmap.delete({ where: { id: roadmapId } });
  }
}

export const roadmapService = new RoadmapService();
