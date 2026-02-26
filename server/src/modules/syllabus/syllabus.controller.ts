import { Request, Response, NextFunction } from 'express';
import { syllabusService } from './syllabus.service';
import { SyllabusBoard } from '../../types';

class SyllabusController {
  async getOptions(_req: Request, res: Response, next: NextFunction) {
    try {
      const options = await syllabusService.getAvailableOptions();
      res.json({ success: true, data: options });
    } catch (error) {
      next(error);
    }
  }

  async getSyllabus(req: Request, res: Response, next: NextFunction) {
    try {
      const { board, grade, subject } = req.params;
      const syllabus = await syllabusService.getSyllabus(
        board as SyllabusBoard,
        parseInt(grade as string),
        subject as string
      );

      if (!syllabus) {
        res.status(404).json({ success: false, error: 'Syllabus not found' });
        return;
      }

      res.json({ success: true, data: syllabus });
    } catch (error) {
      next(error);
    }
  }

  async compare(req: Request, res: Response, next: NextFunction) {
    try {
      const { boards, grade, subject } = req.body;
      const result = await syllabusService.compareSyllabi(boards, grade, subject);
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }
}

export const syllabusController = new SyllabusController();
