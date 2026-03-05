import jwt from 'jsonwebtoken';
import { getRedis } from '../config/redis';
import { logger } from '../config/logger';

const BLACKLIST_PREFIX = 'token:blacklist:';

/**
 * Blacklist an access token in Redis until its natural expiry.
 * Falls back to a 15-minute TTL if we can't decode the token.
 */
export async function blacklistAccessToken(token: string): Promise<void> {
  try {
    const redis = getRedis();

    // Decode (without verifying) to get the expiry time
    const decoded = jwt.decode(token) as { exp?: number } | null;
    const ttlSeconds = decoded?.exp
      ? Math.max(decoded.exp - Math.floor(Date.now() / 1000), 0)
      : 900; // fallback: 15 minutes

    if (ttlSeconds > 0) {
      await redis.set(`${BLACKLIST_PREFIX}${token}`, '1', 'EX', ttlSeconds);
    }
  } catch (err) {
    logger.warn('Failed to blacklist token (Redis may be unavailable)', { err });
  }
}

/**
 * Check if an access token has been blacklisted.
 */
export async function isTokenBlacklisted(token: string): Promise<boolean> {
  try {
    const redis = getRedis();
    const result = await redis.get(`${BLACKLIST_PREFIX}${token}`);
    return result !== null;
  } catch {
    // If Redis is down, allow the token (fail-open to avoid locking everyone out)
    return false;
  }
}
