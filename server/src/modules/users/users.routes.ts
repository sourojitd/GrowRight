import { Router } from 'express';
import { usersController } from './users.controller';
import { authenticate } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { z } from 'zod';

const router = Router();

router.use(authenticate);

router.get('/profile', (req, res, next) => usersController.getProfile(req, res, next));
router.get('/feature-flags', (req, res, next) => usersController.getPublicFlags(req, res, next));

router.patch(
  '/profile',
  validate({
    body: z.object({
      name: z.string().min(2).max(100).optional(),
      avatarUrl: z.string().url().optional(),
    }),
  }),
  (req, res, next) => usersController.updateProfile(req, res, next)
);

router.post(
  '/change-password',
  validate({
    body: z.object({
      currentPassword: z.string().min(1),
      newPassword: z
        .string()
        .min(8)
        .regex(/[A-Z]/)
        .regex(/[a-z]/)
        .regex(/[0-9]/)
        .regex(/[^A-Za-z0-9]/),
    }),
  }),
  (req, res, next) => usersController.changePassword(req, res, next)
);

export default router;
