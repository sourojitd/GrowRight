import { Request, Response, NextFunction } from 'express';
import { milestonesService } from './milestones.service';
import { AuthenticatedRequest } from '../../types';

class MilestonesController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { category, ageMonths } = req.query;
      const milestones = await milestonesService.getMilestones({
        category: category as any,
        ageMonths: ageMonths ? parseInt(ageMonths as string) : undefined,
      });
      res.json({ success: true, data: milestones });
    } catch (error) {
      next(error);
    }
  }

  async getChildMilestones(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await milestonesService.getChildMilestones(
        req.params.childId,
        req.user!.userId
      );
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async updateStatus(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await milestonesService.updateMilestoneStatus(
        req.params.childId,
        req.params.milestoneId,
        req.user!.userId,
        req.body
      );
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async getCategoryProgress(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const progress = await milestonesService.getCategoryProgress(
        req.params.childId,
        req.user!.userId
      );
      res.json({ success: true, data: progress });
    } catch (error) {
      next(error);
    }
  }
}

export const milestonesController = new MilestonesController();
