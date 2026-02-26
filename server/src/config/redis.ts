import Redis from 'ioredis';
import { config } from './index';
import { logger } from './logger';

let redis: Redis | null = null;

export function getRedis(): Redis {
  if (!redis) {
    redis = new Redis(config.REDIS_URL, {
      maxRetriesPerRequest: 3,
      retryStrategy(times) {
        const delay = Math.min(times * 200, 5000);
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
    await client.connect();
  } catch (error) {
    logger.error('Failed to connect to Redis', { error });
    // Redis is non-critical – app can run without cache
    logger.warn('Continuing without Redis');
  }
}

export async function disconnectRedis(): Promise<void> {
  if (redis) {
    await redis.quit();
    redis = null;
    logger.info('Redis disconnected');
  }
}
