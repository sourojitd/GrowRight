import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { AuthenticatedRequest, JwtPayload, UserRole } from '../types';
import { UnauthorizedError, ForbiddenError } from './errorHandler';

/**
 * Authenticate JWT access token from Authorization header.
 */
export function authenticate(
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
): void {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedError('Missing or invalid authorization header');
    }

    const token = authHeader.slice(7);
    const decoded = jwt.verify(token, config.JWT_ACCESS_SECRET) as JwtPayload;

    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      next(error);
      return;
    }

    if (error instanceof jwt.TokenExpiredError) {
      next(new UnauthorizedError('Token expired'));
      return;
    }

    if (error instanceof jwt.JsonWebTokenError) {
      next(new UnauthorizedError('Invalid token'));
      return;
    }

    next(new UnauthorizedError());
  }
}

/**
 * Optional authentication – sets req.user if token present, but doesn't fail.
 */
export function optionalAuth(
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
): void {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader?.startsWith('Bearer ')) {
      const token = authHeader.slice(7);
      const decoded = jwt.verify(token, config.JWT_ACCESS_SECRET) as JwtPayload;
      req.user = decoded;
    }
  } catch {
    // Silently ignore invalid tokens for optional auth
  }

  next();
}

/**
 * Role-based access control middleware.
 */
export function authorize(...roles: UserRole[]) {
  return (req: AuthenticatedRequest, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      next(new UnauthorizedError());
      return;
    }

    if (!roles.includes(req.user.role)) {
      next(new ForbiddenError('Insufficient permissions'));
      return;
    }

    next();
  };
}
