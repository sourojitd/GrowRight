import { prisma } from '../config/database';
import { logger } from '../config/logger';

type AuditAction =
  | 'USER_REGISTERED'
  | 'USER_LOGIN'
  | 'USER_LOGOUT'
  | 'USER_LOGIN_FAILED'
  | 'PASSWORD_RESET'
  | 'EMAIL_VERIFIED'
  | 'OAUTH_LOGIN'
  | 'OAUTH_ACCOUNT_LINKED'
  | 'TOKEN_REFRESHED'
  | 'CHILD_CREATED'
  | 'CHILD_UPDATED'
  | 'CHILD_DELETED'
  | 'INVITE_SENT'
  | 'INVITE_ACCEPTED'
  | 'INVITE_REVOKED'
  | 'ADMIN_ACTION';

interface AuditEntry {
  userId?: string;
  action: AuditAction;
  entityType: string;
  entityId?: string;
  metadata?: Record<string, unknown>;
}

export function audit(entry: AuditEntry): void {
  prisma.auditLog
    .create({
      data: {
        userId: entry.userId,
        action: entry.action,
        entityType: entry.entityType,
        entityId: entry.entityId,
        metadata: entry.metadata ? JSON.parse(JSON.stringify(entry.metadata)) : undefined,
      },
    })
    .catch((err) => {
      logger.warn('Failed to write audit log', { entry, err });
    });
}
