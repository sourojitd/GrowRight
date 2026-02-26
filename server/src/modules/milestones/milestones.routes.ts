import { Router } from 'express';
import { milestonesController } from './milestones.controller';
import { authenticate, optionalAuth } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { z } from 'zod';

const router = Router();

// Public: browse all reference milestones
router.get(
  '/',
  optionalAuth,
  (req, res, next) => milestonesController.getAll(req, res, next)
);

// Protected: child-specific milestone tracking
router.get(
  '/child/:childId',
  authenticate,
  validate({ params: z.object({ childId: z.string() }) }),
  (req, res, next) => milestonesController.getChildMilestones(req, res, next)
);

router.get(
  '/child/:childId/progress',
  authenticate,
  validate({ params: z.object({ childId: z.string() }) }),
  (req, res, next) => milestonesController.getCategoryProgress(req, res, next)
);

router.patch(
  '/child/:childId/:milestoneId',
  authenticate,
  validate({
    params: z.object({ childId: z.string(), milestoneId: z.string() }),
    body: z.object({
      status: z.enum(['NOT_STARTED', 'IN_PROGRESS', 'ACHIEVED']),
      notes: z.string().max(500).optional(),
    }),
  }),
  (req, res, next) => milestonesController.updateStatus(req, res, next)
);

export default router;
