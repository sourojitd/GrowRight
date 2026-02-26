import { Router } from 'express';
import { toysController } from './toys.controller';
import { authenticate, optionalAuth } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { z } from 'zod';

const router = Router();

// Public: browse all toys
router.get(
  '/',
  optionalAuth,
  (req, res, next) => toysController.getAll(req, res, next)
);

// Protected: recommended toys for a child (age-filtered + isSaved)
router.get(
  '/child/:childId',
  authenticate,
  validate({ params: z.object({ childId: z.string() }) }),
  (req, res, next) => toysController.getRecommended(req, res, next)
);

// Protected: save/bookmark a toy
router.post(
  '/child/:childId/:toyId',
  authenticate,
  validate({
    params: z.object({ childId: z.string(), toyId: z.string() }),
  }),
  (req, res, next) => toysController.saveToy(req, res, next)
);

// Protected: unsave a toy
router.delete(
  '/child/:childId/:toyId',
  authenticate,
  validate({
    params: z.object({ childId: z.string(), toyId: z.string() }),
  }),
  (req, res, next) => toysController.unsaveToy(req, res, next)
);

export default router;
