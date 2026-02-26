import bcrypt from 'bcryptjs';
import { prisma } from '../../config/database';
import { config } from '../../config';
import { NotFoundError, AppError } from '../../middleware/errorHandler';
import { sanitizeUser, normalizePagination, buildPaginationMeta } from '../../utils/helpers';
import { PaginationQuery } from '../../types';

class UsersService {
  async getProfile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscription: true,
        _count: { select: { children: true, roadmaps: true } },
      },
    });

    if (!user) throw new NotFoundError('User');
    return sanitizeUser(user as unknown as Record<string, unknown>);
  }

  async updateProfile(userId: string, data: { name?: string; avatarUrl?: string }) {
    const user = await prisma.user.update({
      where: { id: userId },
      data,
    });
    return sanitizeUser(user as unknown as Record<string, unknown>);
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundError('User');

    const isValid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isValid) throw new AppError(400, 'Current password is incorrect');

    const passwordHash = await bcrypt.hash(newPassword, config.BCRYPT_ROUNDS);
    await prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });

    // Invalidate all refresh tokens
    await prisma.refreshToken.deleteMany({ where: { userId } });
  }

  // Admin: list all users
  async listUsers(query: PaginationQuery) {
    const { page, limit, skip, sortBy, sortOrder } = normalizePagination(query);

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: {
          subscription: true,
          _count: { select: { children: true } },
        },
      }),
      prisma.user.count(),
    ]);

    return {
      users: users.map((u) => sanitizeUser(u as unknown as Record<string, unknown>)),
      meta: buildPaginationMeta(total, page, limit),
    };
  }
}

export const usersService = new UsersService();
