import { getRedis } from '../config/redis';
import { logger } from '../config/logger';

class CacheService {
  private get redis() {
    return getRedis();
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await this.redis.get(key);
      if (!value) return null;
      return JSON.parse(value) as T;
    } catch (error) {
      logger.warn('Cache get failed', { key, error });
      return null;
    }
  }

  async set(key: string, value: unknown, ttlSeconds?: number): Promise<void> {
    try {
      const serialized = JSON.stringify(value);
      if (ttlSeconds) {
        await this.redis.setex(key, ttlSeconds, serialized);
      } else {
        await this.redis.set(key, serialized);
      }
    } catch (error) {
      logger.warn('Cache set failed', { key, error });
    }
  }

  async del(key: string): Promise<void> {
    try {
      await this.redis.del(key);
    } catch (error) {
      logger.warn('Cache delete failed', { key, error });
    }
  }

  async delPattern(pattern: string): Promise<void> {
    try {
      const keys = await this.redis.keys(pattern);
      if (keys.length > 0) {
        await this.redis.del(...keys);
      }
    } catch (error) {
      logger.warn('Cache pattern delete failed', { pattern, error });
    }
  }

  async exists(key: string): Promise<boolean> {
    try {
      return (await this.redis.exists(key)) === 1;
    } catch {
      return false;
    }
  }

  async incr(key: string, ttlSeconds?: number): Promise<number> {
    try {
      const val = await this.redis.incr(key);
      if (ttlSeconds && val === 1) {
        await this.redis.expire(key, ttlSeconds);
      }
      return val;
    } catch {
      return 0;
    }
  }
}

export const cacheService = new CacheService();
