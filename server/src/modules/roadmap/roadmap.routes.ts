import { Router } from 'express';
import { roadmapController } from './roadmap.controller';
import { authenticate } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { z } from 'zod';

const router = Router();

router.use(authenticate);

router.get(
  '/child/:childId',
  validate({ params: z.object({ childId: z.string() }) }),
  (req, res, next) => roadmapController.getAll(req, res, next)
);

router.get(
  '/:roadmapId',
  validate({ params: z.object({ roadmapId: z.string() }) }),
  (req, res, next) => roadmapController.getOne(req, res, next)
);

router.post(
  '/child/:childId/generate',
  validate({
    params: z.object({ childId: z.string() }),
    body: z
      .object({
        focusAreas: z
          .array(z.enum(['MOTOR', 'COGNITIVE', 'SPEECH', 'SOCIAL', 'EMOTIONAL']))
          .optional(),
      })
      .optional(),
  }),
  (req, res, next) => roadmapController.generate(req, res, next)
);

router.patch(
  '/:roadmapId/status',
  validate({
    params: z.object({ roadmapId: z.string() }),
    body: z.object({
      status: z.enum(['ACTIVE', 'COMPLETED', 'ARCHIVED']),
    }),
  }),
  (req, res, next) => roadmapController.updateStatus(req, res, next)
);

router.delete(
  '/:roadmapId',
  validate({ params: z.object({ roadmapId: z.string() }) }),
  (req, res, next) => roadmapController.remove(req, res, next)
);

export default router;
