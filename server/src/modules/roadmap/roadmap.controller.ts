import { Response, NextFunction } from 'express';
import { roadmapService } from './roadmap.service';
import { AuthenticatedRequest } from '../../types';

class RoadmapController {
  async getAll(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const roadmaps = await roadmapService.getRoadmaps(
        req.params.childId as string,
        req.user!.userId
      );
      res.json({ success: true, data: roadmaps });
    } catch (error) {
      next(error);
    }
  }

  async getOne(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const roadmap = await roadmapService.getRoadmap(
        req.params.roadmapId as string,
        req.user!.userId
      );
      res.json({ success: true, data: roadmap });
    } catch (error) {
      next(error);
    }
  }

  async generate(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const roadmap = await roadmapService.generateRoadmap(
        req.params.childId as string,
        req.user!.userId,
        req.body.focusAreas
      );
      res.status(201).json({ success: true, data: roadmap });
    } catch (error) {
      next(error);
    }
  }

  async updateStatus(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const roadmap = await roadmapService.updateStatus(
        req.params.roadmapId as string,
        req.user!.userId,
        req.body.status
      );
      res.json({ success: true, data: roadmap });
    } catch (error) {
      next(error);
    }
  }

  async remove(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      await roadmapService.deleteRoadmap(req.params.roadmapId as string, req.user!.userId);
      res.json({ success: true, message: 'Roadmap deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export const roadmapController = new RoadmapController();
