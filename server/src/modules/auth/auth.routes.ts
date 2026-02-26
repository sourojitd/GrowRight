import { Router } from 'express';
import { authController } from './auth.controller';
import { authenticate } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { authLimiter } from '../../middleware/rateLimiter';
import { registerSchema, loginSchema, refreshTokenSchema } from './auth.schema';

const router = Router();

router.post(
  '/register',
  authLimiter,
  validate({ body: registerSchema }),
  (req, res, next) => authController.register(req, res, next)
);

router.post(
  '/login',
  authLimiter,
  validate({ body: loginSchema }),
  (req, res, next) => authController.login(req, res, next)
);

router.post(
  '/refresh',
  authLimiter,
  validate({ body: refreshTokenSchema }),
  (req, res, next) => authController.refreshToken(req, res, next)
);

router.post(
  '/logout',
  authenticate,
  (req, res, next) => authController.logout(req, res, next)
);

router.get(
  '/me',
  authenticate,
  (req, res, next) => authController.getProfile(req, res, next)
);

export default router;
