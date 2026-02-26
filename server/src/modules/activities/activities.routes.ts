import { Router } from 'express';
import { activitiesController } from './activities.controller';
import { authenticate, optionalAuth } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { z } from 'zod';

const router = Router();

// Public: browse all activities
router.get(
  '/',
  optionalAuth,
  (req, res, next) => activitiesController.getAll(req, res, next)
);

// Protected: recommended activities for a child
router.get(
  '/child/:childId',
  authenticate,
  validate({ params: z.object({ childId: z.string() }) }),
  (req, res, next) => activitiesController.getRecommended(req, res, next)
);

// Protected: log a completed activity
router.post(
  '/child/:childId/:activityId',
  authenticate,
  validate({
    params: z.object({ childId: z.string(), activityId: z.string() }),
    body: z
      .object({
        rating: z.number().min(1).max(5).optional(),
        notes: z.string().max(500).optional(),
      })
      .optional(),
  }),
  (req, res, next) => activitiesController.logActivity(req, res, next)
);

// Protected: activity history for a child
router.get(
  '/child/:childId/history',
  authenticate,
  validate({ params: z.object({ childId: z.string() }) }),
  (req, res, next) => activitiesController.getHistory(req, res, next)
);

// Protected: count of past activities not yet completed
router.get(
  '/child/:childId/past-incomplete',
  authenticate,
  validate({ params: z.object({ childId: z.string() }) }),
  (req, res, next) => activitiesController.getPastIncompleteCount(req, res, next)
);

// Protected: bulk-complete all past activities
router.post(
  '/child/:childId/bulk-complete-past',
  authenticate,
  validate({ params: z.object({ childId: z.string() }) }),
  (req, res, next) => activitiesController.bulkCompletePast(req, res, next)
);

export default router;
