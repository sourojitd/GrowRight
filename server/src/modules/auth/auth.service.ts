import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { prisma } from '../../config/database';
import { config } from '../../config';
import { logger } from '../../config/logger';
import { JwtPayload, UserRole } from '../../types';
import { ConflictError, UnauthorizedError } from '../../middleware/errorHandler';
import { RegisterInput, LoginInput } from './auth.schema';
import { sanitizeUser } from '../../utils/helpers';

class AuthService {
  async register(input: RegisterInput) {
    // Check if user already exists
    const existing = await prisma.user.findUnique({ where: { email: input.email } });
    if (existing) {
      throw new ConflictError('An account with this email already exists');
    }

    // Hash password
    const passwordHash = await bcrypt.hash(input.password, config.BCRYPT_ROUNDS);

    // Create user
    const user = await prisma.user.create({
      data: {
        email: input.email,
        passwordHash,
        name: input.name,
        role: UserRole.PARENT,
      },
    });

    // Create default subscription
    await prisma.subscription.create({
      data: {
        userId: user.id,
        plan: 'FREE',
        status: 'ACTIVE',
      },
    });

    // Generate tokens
    const tokens = await this.generateTokens(user.id, user.email, user.role as UserRole);

    logger.info('User registered', { userId: user.id, email: user.email });

    return {
      user: sanitizeUser(user as unknown as Record<string, unknown>),
      ...tokens,
    };
  }

  async login(input: LoginInput) {
    // Find user
    const user = await prisma.user.findUnique({ where: { email: input.email } });
    if (!user) {
      throw new UnauthorizedError('Invalid email or password');
    }

    // Verify password
    const isValid = await bcrypt.compare(input.password, user.passwordHash);
    if (!isValid) {
      throw new UnauthorizedError('Invalid email or password');
    }

    // Generate tokens
    const tokens = await this.generateTokens(user.id, user.email, user.role as UserRole);

    logger.info('User logged in', { userId: user.id });

    return {
      user: sanitizeUser(user as unknown as Record<string, unknown>),
      ...tokens,
    };
  }

  async refreshToken(token: string) {
    // Find the refresh token
    const stored = await prisma.refreshToken.findUnique({ where: { token } });
    if (!stored) {
      throw new UnauthorizedError('Invalid refresh token');
    }

    // Check expiry
    if (stored.expiresAt < new Date()) {
      await prisma.refreshToken.delete({ where: { id: stored.id } });
      throw new UnauthorizedError('Refresh token expired');
    }

    // Get user
    const user = await prisma.user.findUnique({ where: { id: stored.userId } });
    if (!user) {
      throw new UnauthorizedError('User not found');
    }

    // Rotate: delete old token
    await prisma.refreshToken.delete({ where: { id: stored.id } });

    // Generate new tokens
    const tokens = await this.generateTokens(user.id, user.email, user.role as UserRole);

    return {
      user: sanitizeUser(user as unknown as Record<string, unknown>),
      ...tokens,
    };
  }

  async logout(userId: string) {
    // Delete all refresh tokens for the user
    await prisma.refreshToken.deleteMany({ where: { userId } });
    logger.info('User logged out', { userId });
  }

  async getProfile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscription: true,
        _count: { select: { children: true } },
      },
    });

    if (!user) {
      throw new UnauthorizedError('User not found');
    }

    return sanitizeUser(user as unknown as Record<string, unknown>);
  }

  // ─── Private ────────────────────────────────────────

  private async generateTokens(userId: string, email: string, role: UserRole) {
    const payload: JwtPayload = { userId, email, role };

    const accessToken = jwt.sign(payload, config.JWT_ACCESS_SECRET, {
      expiresIn: config.JWT_ACCESS_EXPIRES_IN as any,
    });

    const refreshToken = crypto.randomBytes(64).toString('hex');

    // Parse refresh expiry
    const refreshExpiresMs = this.parseDuration(config.JWT_REFRESH_EXPIRES_IN);
    const expiresAt = new Date(Date.now() + refreshExpiresMs);

    // Store refresh token
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId,
        expiresAt,
      },
    });

    return { accessToken, refreshToken };
  }

  private parseDuration(duration: string): number {
    const match = duration.match(/^(\d+)([smhd])$/);
    if (!match) return 7 * 24 * 60 * 60 * 1000; // default 7 days

    const value = parseInt(match[1]);
    const unit = match[2];
    const multipliers: Record<string, number> = {
      s: 1000,
      m: 60 * 1000,
      h: 60 * 60 * 1000,
      d: 24 * 60 * 60 * 1000,
    };

    return value * (multipliers[unit] || 86400000);
  }
}

export const authService = new AuthService();
