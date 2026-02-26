import { Router } from 'express';
import { vaccinationsController } from './vaccinations.controller';
import { authenticate, optionalAuth } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { z } from 'zod';

const router = Router();

// Public: browse all reference vaccinations
router.get(
  '/',
  optionalAuth,
  (req, res, next) => vaccinationsController.getAll(req, res, next)
);

// Protected: child vaccination checklist with tracking
router.get(
  '/child/:childId',
  authenticate,
  validate({ params: z.object({ childId: z.string() }) }),
  (req, res, next) => vaccinationsController.getChildVaccinations(req, res, next)
);

// Protected: toggle vaccination status
router.patch(
  '/child/:childId/:vaccinationId',
  authenticate,
  validate({
    params: z.object({ childId: z.string(), vaccinationId: z.string() }),
    body: z.object({
      isAdministered: z.boolean(),
      administeredDate: z.string().optional(),
      notes: z.string().max(500).optional(),
    }),
  }),
  (req, res, next) => vaccinationsController.toggleVaccination(req, res, next)
);

export default router;
