import { prisma } from '../../config/database';
import { cacheService } from '../../services/cache.service';
import { NotFoundError, ForbiddenError } from '../../middleware/errorHandler';
import { calculateAgeInMonths } from '../../utils/helpers';
import { cacheKey } from '../../utils/helpers';
import { CACHE_TTL } from '../../utils/constants';
import { MilestoneCategory } from '../../types';

class ToysService {
  /**
   * Get all toys, optionally filtered by category and age.
   */
  async getAll(filters?: {
    category?: MilestoneCategory;
    ageMonths?: number;
  }) {
    const key = cacheKey('toys', filters?.category || 'all', filters?.ageMonths || 'all');
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

    const toys = await prisma.toy.findMany({
      where,
      orderBy: [{ minAgeMonths: 'asc' }, { category: 'asc' }],
    });

    await cacheService.set(key, toys, CACHE_TTL.LONG);
    return toys;
  }

  /**
   * Get recommended toys for a child based on their age, with isSaved flag.
   */
  async getRecommended(childId: string, userId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const ageMonths = calculateAgeInMonths(child.dateOfBirth);

    const toys = await prisma.toy.findMany({
      where: {
        minAgeMonths: { lte: ageMonths },
        maxAgeMonths: { gte: ageMonths },
      },
      orderBy: { category: 'asc' },
    });

    const saved = await prisma.childToy.findMany({
      where: { childId },
      select: { toyId: true },
    });
    const savedIds = new Set(saved.map((s) => s.toyId));

    return toys.map((t) => ({
      ...t,
      isSaved: savedIds.has(t.id),
    }));
  }

  /**
   * Save/bookmark a toy for a child.
   */
  async saveToy(childId: string, toyId: string, userId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const toy = await prisma.toy.findUnique({ where: { id: toyId } });
    if (!toy) throw new NotFoundError('Toy');

    return prisma.childToy.upsert({
      where: { childId_toyId: { childId, toyId } },
      update: {},
      create: { childId, toyId },
      include: { toy: true },
    });
  }

  /**
   * Unsave/remove a toy bookmark for a child.
   */
  async unsaveToy(childId: string, toyId: string, userId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    await prisma.childToy.deleteMany({
      where: { childId, toyId },
    });
  }
}

export const toysService = new ToysService();
