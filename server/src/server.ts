// GrowRight API Server — Sourojit D
import app from './app';
import { config } from './config';
import { logger } from './config/logger';
import { connectDatabase, disconnectDatabase } from './config/database';
import { connectRedis, disconnectRedis } from './config/redis';

async function bootstrap() {
  logger.info('Starting GrowRight API server...');

  // Connect to database
  await connectDatabase();

  // Connect to Redis (non-blocking)
  await connectRedis();

  // Start HTTP server
  const server = app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`, {
      env: config.NODE_ENV,
      port: config.PORT,
      apiVersion: config.API_VERSION,
    });
  });

  // ─── Graceful Shutdown ────────────────────────────────
  const shutdown = async (signal: string) => {
    logger.info(`${signal} received. Starting graceful shutdown...`);

    server.close(async () => {
      logger.info('HTTP server closed');

      await disconnectDatabase();
      await disconnectRedis();

      logger.info('All connections closed. Exiting.');
      process.exit(0);
    });

    // Force exit after 30 seconds
    setTimeout(() => {
      logger.error('Forced shutdown after timeout');
      process.exit(1);
    }, 30_000);
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));

  // ─── Unhandled Errors ─────────────────────────────────
  process.on('unhandledRejection', (reason: unknown) => {
    logger.error('Unhandled Rejection', { reason });
  });

  process.on('uncaughtException', (error: Error) => {
    logger.error('Uncaught Exception', { error: error.message, stack: error.stack });
    process.exit(1);
  });
}

bootstrap().catch((error) => {
  logger.error('Failed to start server', { error });
  process.exit(1);
});
