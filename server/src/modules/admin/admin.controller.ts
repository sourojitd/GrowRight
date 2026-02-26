import { Request, Response, NextFunction } from 'express';
import { adminService } from './admin.service';

class AdminController {
  async getDashboard(_req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await adminService.getDashboardStats();
      res.json({ success: true, data: stats });
    } catch (error) {
      next(error);
    }
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit, search } = req.query;
      const result = await adminService.getUsers({
        page: page ? parseInt(page as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
        search: search as string,
      });
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async getAuditLogs(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit, action, userId } = req.query;
      const result = await adminService.getAuditLogs({
        page: page ? parseInt(page as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
        action: action as string,
        userId: userId as string,
      });
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async getFeatureFlags(_req: Request, res: Response, next: NextFunction) {
    try {
      const flags = await adminService.getFeatureFlags();
      res.json({ success: true, data: flags });
    } catch (error) {
      next(error);
    }
  }

  async toggleFlag(req: Request, res: Response, next: NextFunction) {
    try {
      const flag = await adminService.toggleFeatureFlag(
        req.params.flagName as string,
        req.body.isEnabled
      );
      res.json({ success: true, data: flag });
    } catch (error) {
      next(error);
    }
  }
}

export const adminController = new AdminController();
