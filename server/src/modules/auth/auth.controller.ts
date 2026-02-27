import { Request, Response, NextFunction } from 'express';
import { authService } from './auth.service';
import { AuthenticatedRequest } from '../../types';

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.register(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.login(req.body);
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.refreshToken(req.body.refreshToken);
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async logout(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      await authService.logout(req.user!.userId, req.body.refreshToken);
      res.json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
      next(error);
    }
  }

  async verifyChildInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, childName, childGender, childDateOfBirth } = req.body;
      const result = await authService.verifyChildInfo(email, childName, childGender, childDateOfBirth);
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async resetPasswordWithVerification(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, childName, childDateOfBirth, newPassword } = req.body;
      const result = await authService.resetPasswordWithVerification(email, childName, childDateOfBirth, newPassword);
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async getProfile(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const user = await authService.getProfile(req.user!.userId);
      res.json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
