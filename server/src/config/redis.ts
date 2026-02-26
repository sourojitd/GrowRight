import Redis from 'ioredis';
import { config } from './index';
import { logger } from './logger';

let redis: Redis | null = null;

export function getRedis(): Redis {
  if (!redis) {
    redis = new Redis(config.REDIS_URL, {
      maxRetriesPerRequest: 3,
      connectTimeout: 5000,
      retryStrategy(times) {
        if (times > 5) {
          logger.warn('Redis max retries reached, giving up');
          return null;
        }
        const delay = Math.min(times * 200, 3000);
        return delay;
      },
      lazyConnect: true,
    });

    redis.on('connect', () => logger.info('Redis connected'));
    redis.on('error', (err) => logger.error('Redis error', { error: err.message }));
    redis.on('close', () => logger.warn('Redis connection closed'));
  }

  return redis;
}

export async function connectRedis(): Promise<void> {
  try {
    const client = getRedis();
    await Promise.race([
      client.connect(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Redis connection timeout')), 5000)
      ),
    ]);
  } catch (error: any) {
    logger.error('Failed to connect to Redis', { error: error?.message || error });
    // Redis is non-critical – app can run without cache
    logger.warn('Continuing without Redis — cache disabled');
  }
}

export async function disconnectRedis(): Promise<void> {
  if (redis) {
    try {
      await redis.quit();
    } catch {
      // ignore quit errors
    }
    redis = null;
    logger.info('Redis disconnected');
  }
}
