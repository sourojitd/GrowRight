import { Router } from 'express';
import { authController } from './auth.controller';
import { authenticate } from '../../middleware/auth';
import { getGoogleAuthUrl, handleGoogleCallback, getGithubAuthUrl, handleGithubCallback } from './oauth.service';
import { config } from '../../config';
import { logger } from '../../config/logger';
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

// ─── OAuth ────────────────────────────────────────────

const oauthRedirect = (error?: string) =>
  `${config.CLIENT_URL}/auth/callback?error=${error ?? 'oauth_failed'}`;

// Google
router.get('/google', (req, res) => {
  if (!config.GOOGLE_CLIENT_ID || !config.GOOGLE_CLIENT_SECRET) {
    return res.redirect(oauthRedirect('provider_not_configured'));
  }
  res.redirect(getGoogleAuthUrl());
});

router.get('/google/callback', async (req, res) => {
  const code = req.query.code as string | undefined;
  if (!code) return res.redirect(oauthRedirect());
  try {
    const { accessToken, refreshToken } = await handleGoogleCallback(code);
    const params = new URLSearchParams({ accessToken, refreshToken });
    res.redirect(`${config.CLIENT_URL}/auth/callback?${params}`);
  } catch (err) {
    logger.error('Google OAuth callback failed', { err });
    res.redirect(oauthRedirect());
  }
});

// GitHub
router.get('/github', (req, res) => {
  if (!config.GITHUB_CLIENT_ID || !config.GITHUB_CLIENT_SECRET) {
    return res.redirect(oauthRedirect('provider_not_configured'));
  }
  res.redirect(getGithubAuthUrl());
});

router.get('/github/callback', async (req, res) => {
  const code = req.query.code as string | undefined;
  if (!code) return res.redirect(oauthRedirect());
  try {
    const { accessToken, refreshToken } = await handleGithubCallback(code);
    const params = new URLSearchParams({ accessToken, refreshToken });
    res.redirect(`${config.CLIENT_URL}/auth/callback?${params}`);
  } catch (err) {
    logger.error('GitHub OAuth callback failed', { err });
    res.redirect(oauthRedirect());
  }
});

export default router;
