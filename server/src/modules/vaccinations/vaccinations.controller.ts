import { Request, Response, NextFunction } from 'express';
import { vaccinationsService } from './vaccinations.service';
import { AuthenticatedRequest } from '../../types';

class VaccinationsController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { category } = req.query;
      const vaccinations = await vaccinationsService.getAll(
        category as 'GOVERNMENT' | 'PRIVATE' | undefined
      );
      res.json({ success: true, data: vaccinations });
    } catch (error) {
      next(error);
    }
  }

  async getChildVaccinations(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await vaccinationsService.getChildVaccinations(
        req.params.childId as string,
        req.user!.userId
      );
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async bulkAdministerDue(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await vaccinationsService.bulkAdministerDue(
        req.params.childId as string,
        req.user!.userId
      );
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  async toggleVaccination(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const result = await vaccinationsService.toggleVaccination(
        req.params.childId as string,
        req.params.vaccinationId as string,
        req.user!.userId,
        req.body
      );
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }
}

export const vaccinationsController = new VaccinationsController();
