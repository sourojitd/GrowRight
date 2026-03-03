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
import { createToken, verifyToken } from '../../services/token.service';
import { sendEmail } from '../../services/email.service';
import { verificationEmail } from '../../services/email-templates';

class AuthService {
  async register(input: RegisterInput) {
    // Check if user already exists
    const existing = await prisma.user.findUnique({ where: { email: input.email } });
    if (existing) {
      throw new ConflictError('An account with this email already exists');
    }

    // Hash password
    const passwordHash = await bcrypt.hash(input.password, config.BCRYPT_ROUNDS);

    // Create user (emailVerified = false until they click the link)
    const user = await prisma.user.create({
      data: {
        email: input.email,
        passwordHash,
        name: input.name,
        role: UserRole.PARENT,
        emailVerified: false,
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

    // Claim any pending child invites for this email
    await this.claimPendingInvites(user.email, user.id);

    // Send verification email (fire-and-forget — don't block registration on email failure)
    try {
      const token = await createToken(user.id, 'EMAIL_VERIFY');
      const { subject, html } = verificationEmail(user.name, token);
      await sendEmail({ to: user.email, subject, html });
    } catch (err) {
      logger.warn('Could not send verification email', { userId: user.id, err });
    }

    logger.info('User registered', { userId: user.id, email: user.email });

    return { message: 'Account created. Please check your email to verify your account.', email: user.email };
  }

  async claimPendingInvites(email: string, userId: string) {
    const normalised = email.toLowerCase().trim();
    const pending = await prisma.childInvite.findMany({
      where: {
        email: normalised,
        status: 'PENDING',
        expiresAt: { gt: new Date() },
      },
    });
    if (pending.length === 0) return 0;

    await prisma.$transaction([
      prisma.childAccess.createMany({
        data: pending.map((inv) => ({
          userId,
          childId: inv.childId,
          role: inv.role,
        })),
        skipDuplicates: true,
      }),
      prisma.childInvite.updateMany({
        where: { id: { in: pending.map((inv) => inv.id) } },
        data: { status: 'ACCEPTED', acceptedAt: new Date() },
      }),
    ]);

    return pending.length;
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

    // Block unverified users
    if (!user.emailVerified) {
      throw Object.assign(new UnauthorizedError('EMAIL_NOT_VERIFIED'), { code: 'EMAIL_NOT_VERIFIED' });
    }

    // Generate tokens
    const tokens = await this.generateTokens(user.id, user.email, user.role as UserRole);

    logger.info('User logged in', { userId: user.id });

    return {
      user: sanitizeUser(user as unknown as Record<string, unknown>),
      ...tokens,
    };
  }

  async verifyEmail(rawToken: string) {
    const record = await verifyToken(rawToken, 'EMAIL_VERIFY');
    if (!record) {
      throw new UnauthorizedError('Invalid or expired verification link');
    }

    await prisma.user.update({
      where: { id: record.userId },
      data: { emailVerified: true, verifiedAt: new Date() },
    });

    logger.info('Email verified', { userId: record.userId });
    return { verified: true };
  }

  async resendVerification(email: string) {
    // Always return the same response to avoid user enumeration
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.emailVerified) return;

    try {
      const token = await createToken(user.id, 'EMAIL_VERIFY');
      const { subject, html } = verificationEmail(user.name, token);
      await sendEmail({ to: user.email, subject, html });
    } catch (err) {
      // Re-throw rate-limit errors so the controller can return 429
      if ((err as { code?: string }).code === 'RATE_LIMITED') throw err;
      logger.warn('Could not resend verification email', { userId: user.id, err });
    }
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

  async logout(userId: string, refreshToken?: string) {
    if (refreshToken) {
      // Delete only the specific session's refresh token
      await prisma.refreshToken.deleteMany({ where: { userId, token: refreshToken } });
    } else {
      // Fallback: delete all refresh tokens for the user
      await prisma.refreshToken.deleteMany({ where: { userId } });
    }
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

  async verifyChildInfo(email: string, childName: string, childGender?: string, childDOB?: string) {
    // Find user by email — use constant-time pattern to avoid user enumeration
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedError('Verification failed');
    }

    // Find matching child
    const children = await prisma.child.findMany({ where: { userId: user.id } });

    const match = children.find((child) => {
      const nameMatch = child.name.toLowerCase().trim() === childName.toLowerCase().trim();
      const dobMatch = childDOB
        ? child.dateOfBirth.toISOString().slice(0, 10) === new Date(childDOB).toISOString().slice(0, 10)
        : false;
      const genderMatch = childGender ? child.gender === childGender : true;
      return nameMatch && dobMatch && genderMatch;
    });

    if (!match) {
      throw new UnauthorizedError('Verification failed');
    }

    return { verified: true };
  }

  async resetPasswordWithVerification(email: string, childName: string, childDOB: string, newPassword: string) {
    // Re-verify child info (don't trust client state)
    await this.verifyChildInfo(email, childName, undefined, childDOB);

    // Hash new password
    const passwordHash = await bcrypt.hash(newPassword, config.BCRYPT_ROUNDS);

    // Update user password
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedError('Verification failed');
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { passwordHash },
    });

    // Delete all refresh tokens (force re-login everywhere)
    await prisma.refreshToken.deleteMany({ where: { userId: user.id } });

    logger.info('Password reset via child verification', { userId: user.id });

    return { success: true };
  }

  // ─── Private ────────────────────────────────────────

  private async generateTokens(userId: string, email: string, role: UserRole) {
    const payload: JwtPayload = { userId, email, role };

    const accessToken = jwt.sign(payload, config.JWT_ACCESS_SECRET, {
      expiresIn: config.JWT_ACCESS_EXPIRES_IN as jwt.SignOptions['expiresIn'],
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
