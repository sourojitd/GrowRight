import crypto from 'crypto';
import { prisma } from '../../config/database';
import { NotFoundError, ForbiddenError, ConflictError } from '../../middleware/errorHandler';
import { sendEmail } from '../../services/email.service';
import { childInviteEmail, childInviteAddedEmail } from '../../services/email-templates';
import { logger } from '../../config/logger';

const INVITE_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

class InvitesService {
  /**
   * Invite someone to view a child's profile.
   * If the invitee already has an account, grant access immediately.
   * Otherwise, create a pending invite and send an email.
   */
  async createInvite(
    childId: string,
    ownerId: string,
    email: string,
    role: 'VIEWER' | 'CONTRIBUTOR' = 'VIEWER'
  ) {
    const normalised = email.toLowerCase().trim();

    // Verify ownership
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== ownerId) throw new ForbiddenError();

    const owner = await prisma.user.findUnique({ where: { id: ownerId } });
    if (!owner) throw new NotFoundError('User');

    // Can't invite yourself
    if (normalised === owner.email.toLowerCase()) {
      throw new ConflictError('You cannot invite yourself');
    }

    // Check if the invitee already has an account
    const existingUser = await prisma.user.findUnique({ where: { email: normalised } });

    if (existingUser) {
      // Check if they already have access
      const existing = await prisma.childAccess.findUnique({
        where: { userId_childId: { userId: existingUser.id, childId } },
      });
      if (existing) throw new ConflictError('This person already has access to this child');

      // Grant access directly
      const access = await prisma.childAccess.create({
        data: { userId: existingUser.id, childId, role },
      });

      // Fire-and-forget notification email
      const { subject: addedSubject, html: addedHtml } = childInviteAddedEmail(
        existingUser.name,
        owner.name,
        child.name
      );
      sendEmail({ to: existingUser.email, subject: addedSubject, html: addedHtml }).catch(() => {});

      return { status: 'added' as const, access };
    }

    // No account — create pending invite
    const pendingInvite = await prisma.childInvite.findFirst({
      where: { email: normalised, childId, status: 'PENDING', expiresAt: { gt: new Date() } },
    });
    if (pendingInvite) throw new ConflictError('An active invite already exists for this email');

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + INVITE_EXPIRY_MS);

    const invite = await prisma.childInvite.upsert({
      where: { email_childId: { email: normalised, childId } },
      update: { token, expiresAt, status: 'PENDING', acceptedAt: null, invitedById: ownerId, role },
      create: { email: normalised, childId, invitedById: ownerId, token, expiresAt, role },
    });

    // Send invite email
    const { subject, html } = childInviteEmail(owner.name, child.name, token);
    sendEmail({ to: normalised, subject, html }).catch((err) =>
      logger.warn('Could not send invite email', { err })
    );

    // Probabilistic cleanup (1%)
    if (Math.random() < 0.01) {
      prisma.childInvite
        .deleteMany({ where: { expiresAt: { lt: new Date() }, status: 'PENDING' } })
        .catch(() => {});
    }

    return { status: 'invited' as const, invite };
  }

  /**
   * Accept a pending invite using its token.
   */
  async acceptInvite(token: string, userId: string, userEmail: string) {
    const invite = await prisma.childInvite.findUnique({ where: { token } });

    if (
      !invite ||
      invite.status !== 'PENDING' ||
      invite.expiresAt < new Date() ||
      invite.email.toLowerCase() !== userEmail.toLowerCase()
    ) {
      throw new ForbiddenError('This invitation is invalid, expired, or not for your account');
    }

    const child = await prisma.child.findUnique({ where: { id: invite.childId } });
    if (!child) throw new NotFoundError('Child');

    await prisma.$transaction([
      prisma.childAccess.upsert({
        where: { userId_childId: { userId, childId: invite.childId } },
        update: { role: invite.role },
        create: { userId, childId: invite.childId, role: invite.role },
      }),
      prisma.childInvite.update({
        where: { id: invite.id },
        data: { status: 'ACCEPTED', acceptedAt: new Date() },
      }),
    ]);

    return { child: { id: child.id, name: child.name } };
  }

  /**
   * List all pending invites for a child (owner only).
   */
  async listInvites(childId: string, ownerId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== ownerId) throw new ForbiddenError();

    return prisma.childInvite.findMany({
      where: { childId, status: 'PENDING' },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * List all users who have shared access to a child.
   */
  async listAccesses(childId: string, ownerId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== ownerId) throw new ForbiddenError();

    return prisma.childAccess.findMany({
      where: { childId },
      include: { user: { select: { id: true, name: true, email: true, avatarUrl: true } } },
      orderBy: { createdAt: 'asc' },
    });
  }

  /**
   * Revoke a pending invite.
   */
  async revokeInvite(inviteId: string, childId: string, ownerId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== ownerId) throw new ForbiddenError();

    const invite = await prisma.childInvite.findUnique({ where: { id: inviteId } });
    if (!invite || invite.childId !== childId) throw new NotFoundError('Invite');

    await prisma.childInvite.update({
      where: { id: inviteId },
      data: { status: 'REVOKED' },
    });
  }

  /**
   * Remove shared access for a user.
   */
  async removeAccess(accessId: string, childId: string, ownerId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== ownerId) throw new ForbiddenError();

    const access = await prisma.childAccess.findUnique({ where: { id: accessId } });
    if (!access || access.childId !== childId) throw new NotFoundError('Access record');

    await prisma.childAccess.delete({ where: { id: accessId } });
  }
}

export const invitesService = new InvitesService();
