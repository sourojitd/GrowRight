import { Response, NextFunction } from 'express';
import { invitesService } from './invites.service';
import { AuthenticatedRequest } from '../../types';

class InvitesController {
  async createInvite(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await invitesService.createInvite(
        req.params.childId!,
        req.user!.userId,
        req.body.email,
        req.body.role
      );
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async listInvites(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const invites = await invitesService.listInvites(req.params.childId!, req.user!.userId);
      res.json({ success: true, data: invites });
    } catch (error) {
      next(error);
    }
  }

  async listAccesses(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const accesses = await invitesService.listAccesses(req.params.childId!, req.user!.userId);
      res.json({ success: true, data: accesses });
    } catch (error) {
      next(error);
    }
  }

  async revokeInvite(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      await invitesService.revokeInvite(req.params.inviteId!, req.params.childId!, req.user!.userId);
      res.json({ success: true, message: 'Invite revoked' });
    } catch (error) {
      next(error);
    }
  }

  async removeAccess(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      await invitesService.removeAccess(req.params.accessId!, req.params.childId!, req.user!.userId);
      res.json({ success: true, message: 'Access removed' });
    } catch (error) {
      next(error);
    }
  }

  async acceptInvite(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await invitesService.acceptInvite(
        req.body.token,
        req.user!.userId,
        req.user!.email
      );
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }
}

export const invitesController = new InvitesController();
