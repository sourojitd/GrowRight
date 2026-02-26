import { Response, NextFunction } from 'express';
import { childrenService } from './children.service';
import { AuthenticatedRequest } from '../../types';

class ChildrenController {
  async getAll(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const children = await childrenService.getChildren(req.user!.userId);
      res.json({ success: true, data: children });
    } catch (error) {
      next(error);
    }
  }

  async getOne(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const child = await childrenService.getChild(req.params.childId, req.user!.userId);
      res.json({ success: true, data: child });
    } catch (error) {
      next(error);
    }
  }

  async create(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const child = await childrenService.createChild(req.user!.userId, req.body);
      res.status(201).json({ success: true, data: child });
    } catch (error) {
      next(error);
    }
  }

  async update(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const child = await childrenService.updateChild(
        req.params.childId,
        req.user!.userId,
        req.body
      );
      res.json({ success: true, data: child });
    } catch (error) {
      next(error);
    }
  }

  async remove(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      await childrenService.deleteChild(req.params.childId, req.user!.userId);
      res.json({ success: true, message: 'Child profile deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export const childrenController = new ChildrenController();
