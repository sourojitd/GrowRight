import { prisma } from '../../config/database';
import { normalizePagination, buildPaginationMeta, sanitizeUser } from '../../utils/helpers';
import { PaginationQuery } from '../../types';

class AdminService {
  async getDashboardStats() {
    const [
      totalUsers,
      totalChildren,
      totalMilestonesTracked,
      totalActivitiesCompleted,
      totalRoadmaps,
      usersByTier,
      recentSignups,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.child.count(),
      prisma.childMilestone.count({ where: { status: 'ACHIEVED' } }),
      prisma.childActivity.count(),
      prisma.roadmap.count(),
      prisma.user.groupBy({
        by: ['subscriptionTier'],
        _count: true,
      }),
      prisma.user.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // last 7 days
          },
        },
      }),
    ]);

    return {
      totalUsers,
      totalChildren,
      totalMilestonesTracked,
      totalActivitiesCompleted,
      totalRoadmaps,
      usersByTier: usersByTier.map((t) => ({
        tier: t.subscriptionTier,
        count: t._count,
      })),
      recentSignups,
    };
  }

  async getUsers(query: PaginationQuery & { search?: string }) {
    const { page, limit, skip, sortBy, sortOrder } = normalizePagination(query);

    const where: any = {};
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { email: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: {
          subscription: true,
          _count: { select: { children: true } },
        },
      }),
      prisma.user.count({ where }),
    ]);

    return {
      users: users.map((u) => sanitizeUser(u as unknown as Record<string, unknown>)),
      meta: buildPaginationMeta(total, page, limit),
    };
  }

  async getAuditLogs(query: PaginationQuery & { action?: string; userId?: string }) {
    const { page, limit, skip } = normalizePagination(query);

    const where: any = {};
    if (query.action) where.action = query.action;
    if (query.userId) where.userId = query.userId;

    const [logs, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { user: { select: { name: true, email: true } } },
      }),
      prisma.auditLog.count({ where }),
    ]);

    return { logs, meta: buildPaginationMeta(total, page, limit) };
  }

  async getFeatureFlags() {
    return prisma.featureFlag.findMany({ orderBy: { name: 'asc' } });
  }

  async toggleFeatureFlag(flagName: string, isEnabled: boolean) {
    return prisma.featureFlag.update({
      where: { name: flagName },
      data: { isEnabled },
    });
  }

  async updateMilestone(milestoneId: string, data: any) {
    return prisma.milestone.update({
      where: { id: milestoneId },
      data,
    });
  }

  async updateActivity(activityId: string, data: any) {
    return prisma.activity.update({
      where: { id: activityId },
      data,
    });
  }
}

export const adminService = new AdminService();
