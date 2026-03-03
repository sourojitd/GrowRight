import { Router } from 'express';
import { invitesController } from './invites.controller';
import { authenticate } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { z } from 'zod';

const router = Router();

const childIdParam = z.object({ childId: z.string() });

const createInviteSchema = z.object({
  email: z.string().email('Invalid email address'),
  role: z.enum(['VIEWER', 'CONTRIBUTOR']).default('VIEWER'),
});

const acceptInviteSchema = z.object({
  token: z.string().min(1),
});

// Per-child invite management (owner only)
router.get(
  '/children/:childId/invites',
  authenticate,
  validate({ params: childIdParam }),
  (req, res, next) => invitesController.listInvites(req, res, next)
);

router.get(
  '/children/:childId/accesses',
  authenticate,
  validate({ params: childIdParam }),
  (req, res, next) => invitesController.listAccesses(req, res, next)
);

router.post(
  '/children/:childId/invites',
  authenticate,
  validate({ params: childIdParam, body: createInviteSchema }),
  (req, res, next) => invitesController.createInvite(req, res, next)
);

router.delete(
  '/children/:childId/invites/:inviteId',
  authenticate,
  validate({ params: childIdParam.extend({ inviteId: z.string() }) }),
  (req, res, next) => invitesController.revokeInvite(req, res, next)
);

router.delete(
  '/children/:childId/accesses/:accessId',
  authenticate,
  validate({ params: childIdParam.extend({ accessId: z.string() }) }),
  (req, res, next) => invitesController.removeAccess(req, res, next)
);

// Accept an invite (any authenticated user)
router.post(
  '/invites/accept',
  authenticate,
  validate({ body: acceptInviteSchema }),
  (req, res, next) => invitesController.acceptInvite(req, res, next)
);

export default router;
