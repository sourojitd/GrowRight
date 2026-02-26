import { Router } from 'express';
import { syllabusController } from './syllabus.controller';
import { authenticate } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { z } from 'zod';

const router = Router();

router.use(authenticate);

router.get('/options', (req, res, next) => syllabusController.getOptions(req, res, next));

router.get(
  '/:board/:grade/:subject',
  validate({
    params: z.object({
      board: z.enum(['CBSE', 'ICSE', 'IB']),
      grade: z.string().refine((v) => {
        const n = parseInt(v);
        return n >= 1 && n <= 12;
      }, 'Grade must be 1-12'),
      subject: z.string().min(1),
    }),
  }),
  (req, res, next) => syllabusController.getSyllabus(req, res, next)
);

router.post(
  '/compare',
  validate({
    body: z.object({
      boards: z.array(z.enum(['CBSE', 'ICSE', 'IB'])).min(2).max(3),
      grade: z.number().min(1).max(12),
      subject: z.string().min(1),
    }),
  }),
  (req, res, next) => syllabusController.compare(req, res, next)
);

export default router;
