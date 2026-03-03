import crypto from 'crypto';
import { prisma } from '../config/database';
import { TokenType } from '@prisma/client';

const RATE_LIMIT_MS = 2 * 60 * 1000; // 2 minutes between requests

const TOKEN_EXPIRY: Record<TokenType, number> = {
  EMAIL_VERIFY: 24 * 60 * 60 * 1000,  // 24 hours
  PASSWORD_RESET: 60 * 60 * 1000,      // 1 hour
};

function hashToken(raw: string): string {
  return crypto.createHash('sha256').update(raw).digest('hex');
}

/**
 * Create a new verification token for a user.
 * Enforces a 2-minute rate limit between requests of the same type.
 * Invalidates any previous unused tokens of that type.
 */
export async function createToken(userId: string, type: TokenType): Promise<string> {
  // Rate-limit check
  const recent = await prisma.verificationToken.findFirst({
    where: {
      userId,
      type,
      usedAt: null,
      createdAt: { gte: new Date(Date.now() - RATE_LIMIT_MS) },
    },
  });
  if (recent) {
    throw Object.assign(new Error('Please wait before requesting another email'), { code: 'RATE_LIMITED' });
  }

  // Invalidate previous tokens of this type
  await prisma.verificationToken.updateMany({
    where: { userId, type, usedAt: null },
    data: { usedAt: new Date() },
  });

  // Generate new token
  const raw = crypto.randomBytes(32).toString('hex');
  const tokenHash = hashToken(raw);
  const expiresAt = new Date(Date.now() + TOKEN_EXPIRY[type]);

  await prisma.verificationToken.create({
    data: { userId, type, tokenHash, expiresAt },
  });

  // Probabilistic cleanup of expired tokens (1%)
  if (Math.random() < 0.01) {
    prisma.verificationToken
      .deleteMany({ where: { expiresAt: { lt: new Date() } } })
      .catch(() => {});
  }

  return raw;
}

/**
 * Verify a raw token. Returns the token record (with user) on success, null on failure.
 */
export async function verifyToken(rawToken: string, type: TokenType) {
  const tokenHash = hashToken(rawToken);

  const record = await prisma.verificationToken.findFirst({
    where: {
      tokenHash,
      type,
      usedAt: null,
      expiresAt: { gt: new Date() },
    },
    include: { user: true },
  });

  if (!record) return null;

  await prisma.verificationToken.update({
    where: { id: record.id },
    data: { usedAt: new Date() },
  });

  return record;
}
