import { Request, Response, NextFunction } from 'express';
import { activitiesService } from './activities.service';
import { AuthenticatedRequest } from '../../types';

class ActivitiesController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { category, ageMonths } = req.query;
      const activities = await activitiesService.getActivities({
        category: category as any,
        ageMonths: ageMonths ? parseInt(ageMonths as string) : undefined,
      });
      res.json({ success: true, data: activities });
    } catch (error) {
      next(error);
    }
  }

  async getRecommended(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const activities = await activitiesService.getRecommendedForChild(
        req.params.childId,
        req.user!.userId
      );
      res.json({ success: true, data: activities });
    } catch (error) {
      next(error);
    }
  }

  async logActivity(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await activitiesService.logActivity(
        req.params.childId,
        req.params.activityId,
        req.user!.userId,
        req.body
      );
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async getHistory(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const history = await activitiesService.getHistory(
        req.params.childId,
        req.user!.userId
      );
      res.json({ success: true, data: history });
    } catch (error) {
      next(error);
    }
  }
}

export const activitiesController = new ActivitiesController();
