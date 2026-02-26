import { Router } from 'express';
import { adminController } from './admin.controller';
import { authenticate, authorize } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { UserRole } from '../../types';
import { z } from 'zod';

const router = Router();

// All admin routes require ADMIN role
router.use(authenticate);
router.use(authorize(UserRole.ADMIN));

router.get('/dashboard', (req, res, next) => adminController.getDashboard(req, res, next));
router.get('/users', (req, res, next) => adminController.getUsers(req, res, next));
router.get('/audit-logs', (req, res, next) => adminController.getAuditLogs(req, res, next));
router.get('/feature-flags', (req, res, next) => adminController.getFeatureFlags(req, res, next));

router.patch(
  '/feature-flags/:flagName',
  validate({
    params: z.object({ flagName: z.string() }),
    body: z.object({ isEnabled: z.boolean() }),
  }),
  (req, res, next) => adminController.toggleFlag(req, res, next)
);

export default router;
