import crypto from 'crypto';
import { prisma } from '../../config/database';
import { config } from '../../config';
import { logger } from '../../config/logger';
import { UserRole } from '../../types';
import { sanitizeUser } from '../../utils/helpers';
import { authService } from './auth.service';
import { audit } from '../../services/audit.service';

// ─── OAuth State (CSRF protection) ──────────────────────────────────────────

const pendingStates = new Map<string, number>();

const STATE_TTL_MS = 10 * 60 * 1000; // 10 minutes

export function generateOAuthState(): string {
  const state = crypto.randomBytes(32).toString('hex');
  pendingStates.set(state, Date.now());

  // Cleanup expired states lazily
  if (pendingStates.size > 100) {
    const now = Date.now();
    for (const [key, ts] of pendingStates) {
      if (now - ts > STATE_TTL_MS) pendingStates.delete(key);
    }
  }

  return state;
}

export function validateOAuthState(state: string | undefined): boolean {
  if (!state || !pendingStates.has(state)) return false;
  const ts = pendingStates.get(state)!;
  pendingStates.delete(state);
  return Date.now() - ts < STATE_TTL_MS;
}

// ─── Google ────────────────────────────────────────────────────────────────

export function getGoogleAuthUrl(state: string): string {
  const params = new URLSearchParams({
    client_id: config.GOOGLE_CLIENT_ID!,
    redirect_uri: `${config.SERVER_URL}/api/${config.API_VERSION}/auth/google/callback`,
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    prompt: 'select_account',
    state,
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}

async function exchangeGoogleCode(code: string) {
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      code,
      client_id: config.GOOGLE_CLIENT_ID,
      client_secret: config.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${config.SERVER_URL}/api/${config.API_VERSION}/auth/google/callback`,
      grant_type: 'authorization_code',
    }),
  });
  const tokenData = await tokenRes.json() as { access_token: string; error?: string };
  if (!tokenData.access_token) throw new Error(`Google token exchange failed: ${tokenData.error}`);

  const profileRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });
  const profile = await profileRes.json() as { sub: string; email: string; name: string; picture?: string };

  return { googleId: profile.sub, email: profile.email, name: profile.name, avatarUrl: profile.picture };
}

// ─── GitHub ────────────────────────────────────────────────────────────────

export function getGithubAuthUrl(state: string): string {
  const params = new URLSearchParams({
    client_id: config.GITHUB_CLIENT_ID!,
    redirect_uri: `${config.SERVER_URL}/api/${config.API_VERSION}/auth/github/callback`,
    scope: 'read:user user:email',
    state,
  });
  return `https://github.com/login/oauth/authorize?${params}`;
}

async function exchangeGithubCode(code: string) {
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: config.GITHUB_CLIENT_ID,
      client_secret: config.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${config.SERVER_URL}/api/${config.API_VERSION}/auth/github/callback`,
    }),
  });
  const tokenData = await tokenRes.json() as { access_token: string; error?: string };
  if (!tokenData.access_token) throw new Error(`GitHub token exchange failed: ${tokenData.error}`);

  const headers = { Authorization: `Bearer ${tokenData.access_token}`, 'User-Agent': 'GrowRight' };

  const [profileRes, emailsRes] = await Promise.all([
    fetch('https://api.github.com/user', { headers }),
    fetch('https://api.github.com/user/emails', { headers }),
  ]);

  const profile = await profileRes.json() as { id: number; name: string; login: string; avatar_url?: string; email?: string };
  const emails = await emailsRes.json() as { email: string; primary: boolean; verified: boolean }[];

  const primaryEmail =
    emails.find((e) => e.primary && e.verified)?.email ||
    emails.find((e) => e.verified)?.email ||
    profile.email;

  if (!primaryEmail) throw new Error('No verified email found on GitHub account');

  return { githubId: String(profile.id), email: primaryEmail, name: profile.name || profile.login, avatarUrl: profile.avatar_url };
}

// ─── Find-or-create ────────────────────────────────────────────────────────

async function findOrCreateOAuthUser(
  provider: 'google' | 'github',
  providerId: string,
  email: string,
  name: string,
  avatarUrl?: string
) {
  const idField = provider === 'google' ? 'googleId' : 'githubId';

  // 1. Find by OAuth provider ID
  let user = await prisma.user.findFirst({ where: { [idField]: providerId } });

  if (!user) {
    // 2. Find by email — link OAuth to existing account
    user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          [idField]: providerId,
          emailVerified: true,
          verifiedAt: user.verifiedAt ?? new Date(),
          avatarUrl: user.avatarUrl ?? avatarUrl,
        },
      });
      audit({
        userId: user.id,
        action: 'OAUTH_ACCOUNT_LINKED',
        entityType: 'user',
        entityId: user.id,
        metadata: { provider },
      });
      logger.info(`Linked ${provider} OAuth to existing account`, { userId: user.id });
    } else {
      // 3. Create new user
      user = await prisma.user.create({
        data: {
          email,
          name,
          avatarUrl,
          role: UserRole.PARENT,
          emailVerified: true,
          verifiedAt: new Date(),
          ...(provider === 'google' ? { googleId: providerId } : { githubId: providerId }),
        },
      });

      await prisma.subscription.create({
        data: { userId: user.id, plan: 'FREE', status: 'ACTIVE' },
      });

      authService.claimPendingInvites(user.email, user.id).catch((err) => {
        logger.warn('Could not claim pending invites on OAuth register', { userId: user!.id, err });
      });

      audit({
        userId: user.id,
        action: 'USER_REGISTERED',
        entityType: 'user',
        entityId: user.id,
        metadata: { provider, method: 'oauth' },
      });

      logger.info(`New user via ${provider} OAuth`, { userId: user.id, email: user.email });
    }
  }

  audit({
    userId: user.id,
    action: 'OAUTH_LOGIN',
    entityType: 'user',
    entityId: user.id,
    metadata: { provider },
  });

  const tokens = await authService.generateTokens(user.id, user.email, user.role as UserRole);
  return { user: sanitizeUser(user as unknown as Record<string, unknown>), ...tokens };
}

// ─── Handlers ─────────────────────────────────────────────────────────────

export async function handleGoogleCallback(code: string) {
  const profile = await exchangeGoogleCode(code);
  return findOrCreateOAuthUser('google', profile.googleId, profile.email, profile.name, profile.avatarUrl);
}

export async function handleGithubCallback(code: string) {
  const profile = await exchangeGithubCode(code);
  return findOrCreateOAuthUser('github', profile.githubId, profile.email, profile.name, profile.avatarUrl);
}
