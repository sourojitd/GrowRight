import { Queue, Worker, Job } from 'bullmq';
import { config } from '../config';
import { logger } from '../config/logger';

const connection = {
  host: new URL(config.REDIS_URL).hostname || 'localhost',
  port: parseInt(new URL(config.REDIS_URL).port || '6379'),
};

// ─── Queue Definitions ────────────────────────────────
export const emailQueue = new Queue('emails', { connection });
export const roadmapQueue = new Queue('roadmaps', { connection });
export const analyticsQueue = new Queue('analytics', { connection });

// ─── Email Worker ─────────────────────────────────────
const emailWorker = new Worker(
  'emails',
  async (job: Job) => {
    logger.info('Processing email job', { id: job.id, type: job.data.type });
    // Email sending implementation will go here
    // For now, log the email details
    logger.info('Email sent (mock)', {
      to: job.data.to,
      subject: job.data.subject,
    });
  },
  { connection, concurrency: 5 }
);

// ─── Roadmap Generation Worker ────────────────────────
const roadmapWorker = new Worker(
  'roadmaps',
  async (job: Job) => {
    logger.info('Processing roadmap generation', { id: job.id, childId: job.data.childId });
    // AI roadmap generation will go here
  },
  { connection, concurrency: 2 }
);

// ─── Analytics Worker ─────────────────────────────────
const analyticsWorker = new Worker(
  'analytics',
  async (job: Job) => {
    logger.debug('Processing analytics event', { event: job.data.event });
    // Analytics processing
  },
  { connection, concurrency: 10 }
);

// ─── Error Handlers ───────────────────────────────────
for (const worker of [emailWorker, roadmapWorker, analyticsWorker]) {
  worker.on('failed', (job, err) => {
    logger.error(`Job ${job?.id} failed in ${worker.name}`, {
      error: err.message,
      data: job?.data,
    });
  });

  worker.on('completed', (job) => {
    logger.debug(`Job ${job.id} completed in ${worker.name}`);
  });
}

// ─── Helper to enqueue jobs ───────────────────────────
export async function enqueueEmail(data: {
  to: string;
  subject: string;
  template: string;
  variables: Record<string, string>;
}): Promise<void> {
  await emailQueue.add('send-email', data, {
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 },
  });
}

export async function enqueueRoadmapGeneration(data: {
  childId: string;
  userId: string;
  roadmapId: string;
}): Promise<void> {
  await roadmapQueue.add('generate-roadmap', data, {
    attempts: 2,
    backoff: { type: 'exponential', delay: 5000 },
  });
}

export async function trackEvent(data: {
  event: string;
  userId?: string;
  properties?: Record<string, unknown>;
}): Promise<void> {
  await analyticsQueue.add('track', data, {
    removeOnComplete: 1000,
    removeOnFail: 500,
  });
}
