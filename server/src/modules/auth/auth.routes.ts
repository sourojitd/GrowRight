import { Router } from 'express';
import { authController } from './auth.controller';
import { authenticate } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { authLimiter } from '../../middleware/rateLimiter';
import {
  registerSchema,
  loginSchema,
  refreshTokenSchema,
  logoutSchema,
  verifyChildInfoSchema,
  resetPasswordWithVerificationSchema,
  resendVerificationSchema,
} from './auth.schema';

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
  '/verify-child-info',
  authLimiter,
  validate({ body: verifyChildInfoSchema }),
  (req, res, next) => authController.verifyChildInfo(req, res, next)
);

router.post(
  '/reset-password-verified',
  authLimiter,
  validate({ body: resetPasswordWithVerificationSchema }),
  (req, res, next) => authController.resetPasswordWithVerification(req, res, next)
);

router.post(
  '/logout',
  authenticate,
  validate({ body: logoutSchema }),
  (req, res, next) => authController.logout(req, res, next)
);

router.get(
  '/me',
  authenticate,
  (req, res, next) => authController.getProfile(req, res, next)
);

// Email verification (GET — redirect from email link)
router.get(
  '/verify-email',
  (req, res, next) => authController.verifyEmail(req, res, next)
);

// Resend verification email
router.post(
  '/resend-verification',
  authLimiter,
  validate({ body: resendVerificationSchema }),
  (req, res, next) => authController.resendVerification(req, res, next)
);

export default router;
