import { Router } from 'express';
import crypto from 'crypto';
import { authController } from './auth.controller';
import { authenticate } from '../../middleware/auth';
import {
  getGoogleAuthUrl,
  handleGoogleCallback,
  getGithubAuthUrl,
  handleGithubCallback,
  generateOAuthState,
  validateOAuthState,
} from './oauth.service';
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

// Short-lived in-memory store for OAuth exchange codes (avoids tokens in URL)
const oauthCodes = new Map<string, { accessToken: string; refreshToken: string; expiresAt: number }>();

// Google
router.get('/google', (req, res) => {
  if (!config.GOOGLE_CLIENT_ID || !config.GOOGLE_CLIENT_SECRET) {
    return res.redirect(oauthRedirect('provider_not_configured'));
  }
  const state = generateOAuthState();
  res.redirect(getGoogleAuthUrl(state));
});

router.get('/google/callback', async (req, res) => {
  const code = req.query.code as string | undefined;
  const state = req.query.state as string | undefined;

  if (!validateOAuthState(state)) {
    logger.warn('Google OAuth callback with invalid state', { state });
    return res.redirect(oauthRedirect('invalid_state'));
  }
  if (!code) return res.redirect(oauthRedirect());

  try {
    const { accessToken, refreshToken } = await handleGoogleCallback(code);
    const exchangeCode = crypto.randomBytes(32).toString('hex');
    oauthCodes.set(exchangeCode, { accessToken, refreshToken, expiresAt: Date.now() + 60_000 });
    res.redirect(`${config.CLIENT_URL}/auth/callback?code=${exchangeCode}`);
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
  const state = generateOAuthState();
  res.redirect(getGithubAuthUrl(state));
});

router.get('/github/callback', async (req, res) => {
  const code = req.query.code as string | undefined;
  const state = req.query.state as string | undefined;

  if (!validateOAuthState(state)) {
    logger.warn('GitHub OAuth callback with invalid state', { state });
    return res.redirect(oauthRedirect('invalid_state'));
  }
  if (!code) return res.redirect(oauthRedirect());

  try {
    const { accessToken, refreshToken } = await handleGithubCallback(code);
    const exchangeCode = crypto.randomBytes(32).toString('hex');
    oauthCodes.set(exchangeCode, { accessToken, refreshToken, expiresAt: Date.now() + 60_000 });
    res.redirect(`${config.CLIENT_URL}/auth/callback?code=${exchangeCode}`);
  } catch (err) {
    logger.error('GitHub OAuth callback failed', { err });
    res.redirect(oauthRedirect());
  }
});

// Exchange a one-time code for tokens (used by the frontend after OAuth redirect)
router.post('/oauth/exchange', authLimiter, (req, res) => {
  const { code } = req.body as { code?: string };
  if (!code) {
    return res.status(400).json({ success: false, error: 'Missing code' });
  }

  const entry = oauthCodes.get(code);
  oauthCodes.delete(code);

  if (!entry || entry.expiresAt < Date.now()) {
    return res.status(401).json({ success: false, error: 'Invalid or expired code' });
  }

  res.json({
    success: true,
    data: { accessToken: entry.accessToken, refreshToken: entry.refreshToken },
  });
});

export default router;
