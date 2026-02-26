import { Router } from 'express';
import { childrenController } from './children.controller';
import { authenticate } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { createChildSchema, updateChildSchema, childIdParam } from './children.schema';

const router = Router();

router.use(authenticate);

router.get('/', (req, res, next) => childrenController.getAll(req, res, next));

router.get(
  '/:childId',
  validate({ params: childIdParam }),
  (req, res, next) => childrenController.getOne(req, res, next)
);

router.post(
  '/',
  validate({ body: createChildSchema }),
  (req, res, next) => childrenController.create(req, res, next)
);

router.patch(
  '/:childId',
  validate({ params: childIdParam, body: updateChildSchema }),
  (req, res, next) => childrenController.update(req, res, next)
);

router.delete(
  '/:childId',
  validate({ params: childIdParam }),
  (req, res, next) => childrenController.remove(req, res, next)
);

export default router;
