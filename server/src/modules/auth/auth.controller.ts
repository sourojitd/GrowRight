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
      const accessToken = req.headers.authorization?.slice(7);
      await authService.logout(req.user!.userId, req.body.refreshToken, accessToken);
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

  async verifyEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { token } = req.query as { token?: string };
      if (!token) return res.redirect(`${process.env.CLIENT_URL || 'http://localhost:5173'}/verify-email?error=missing-token`);
      await authService.verifyEmail(token);
      res.redirect(`${process.env.CLIENT_URL || 'http://localhost:5173'}/login?verified=true`);
    } catch {
      res.redirect(`${process.env.CLIENT_URL || 'http://localhost:5173'}/verify-email?error=invalid-or-expired`);
    }
  }

  async resendVerification(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body as { email: string };
      await authService.resendVerification(email);
      res.json({ success: true, message: 'If this email exists and is unverified, a new link has been sent.' });
    } catch (err) {
      if ((err as { code?: string }).code === 'RATE_LIMITED') {
        return res.status(429).json({ success: false, error: 'Please wait a moment before requesting another email.' });
      }
      next(err);
    }
  }
}

export const authController = new AuthController();
