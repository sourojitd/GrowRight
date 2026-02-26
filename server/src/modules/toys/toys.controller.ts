import { Request, Response, NextFunction } from 'express';
import { toysService } from './toys.service';
import { AuthenticatedRequest, MilestoneCategory } from '../../types';

class ToysController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { category, ageMonths } = req.query;
      const toys = await toysService.getAll({
        category: category as MilestoneCategory | undefined,
        ageMonths: ageMonths ? parseInt(ageMonths as string) : undefined,
      });
      res.json({ success: true, data: toys });
    } catch (error) {
      next(error);
    }
  }

  async getRecommended(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const toys = await toysService.getRecommended(
        req.params.childId as string,
        req.user!.userId
      );
      res.json({ success: true, data: toys });
    } catch (error) {
      next(error);
    }
  }

  async saveToy(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await toysService.saveToy(
        req.params.childId as string,
        req.params.toyId as string,
        req.user!.userId
      );
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async unsaveToy(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      await toysService.unsaveToy(
        req.params.childId as string,
        req.params.toyId as string,
        req.user!.userId
      );
      res.json({ success: true, message: 'Toy unsaved' });
    } catch (error) {
      next(error);
    }
  }
}

export const toysController = new ToysController();
