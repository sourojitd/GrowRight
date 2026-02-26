import { Response, NextFunction } from 'express';
import { usersService } from './users.service';
import { featureFlagService } from '../../services/featureFlag.service';
import { FLAG_FREE_VERSION } from '../../utils/constants';
import { AuthenticatedRequest } from '../../types';

class UsersController {
  async getProfile(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const user = await usersService.getProfile(req.user!.userId);
      res.json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const user = await usersService.updateProfile(req.user!.userId, req.body);
      res.json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }

  async getPublicFlags(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const freeVersion = await featureFlagService.isEnabled(FLAG_FREE_VERSION);
      res.json({ success: true, data: { free_version: freeVersion } });
    } catch (error) {
      next(error);
    }
  }

  async changePassword(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      await usersService.changePassword(
        req.user!.userId,
        req.body.currentPassword,
        req.body.newPassword
      );
      res.json({ success: true, message: 'Password changed successfully' });
    } catch (error) {
      next(error);
    }
  }
}

export const usersController = new UsersController();
