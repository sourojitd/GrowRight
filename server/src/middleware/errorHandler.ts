import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { logger } from '../config/logger';
import { ApiResponse } from '../types';

// ─── Custom Error Classes ─────────────────────────────
export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public isOperational = true
  ) {
    super(message);
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(resource = 'Resource') {
    super(404, `${resource} not found`);
    this.name = 'NotFoundError';
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(401, message);
    this.name = 'UnauthorizedError';
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden') {
    super(403, message);
    this.name = 'ForbiddenError';
  }
}

export class ConflictError extends AppError {
  constructor(message = 'Resource already exists') {
    super(409, message);
    this.name = 'ConflictError';
  }
}

export class ValidationError extends AppError {
  constructor(message = 'Validation failed') {
    super(422, message);
    this.name = 'ValidationError';
  }
}

export class RateLimitError extends AppError {
  constructor() {
    super(429, 'Too many requests. Please try again later.');
    this.name = 'RateLimitError';
  }
}

// ─── Global Error Handler ─────────────────────────────
export function globalErrorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  // Zod validation errors
  if (err instanceof ZodError) {
    const formatted = err.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));

    res.status(422).json({
      success: false,
      error: 'Validation failed',
      details: formatted,
    } as ApiResponse);
    return;
  }

  // Known operational errors
  if (err instanceof AppError) {
    if (!err.isOperational) {
      logger.error('Non-operational error', { error: err.message, stack: err.stack });
    }

    res.status(err.statusCode).json({
      success: false,
      error: err.message,
    } as ApiResponse);
    return;
  }

  // Prisma known errors
  if (err.constructor?.name === 'PrismaClientKnownRequestError') {
    const prismaErr = err as any;
    if (prismaErr.code === 'P2002') {
      res.status(409).json({
        success: false,
        error: 'A record with this value already exists',
      } as ApiResponse);
      return;
    }
    if (prismaErr.code === 'P2025') {
      res.status(404).json({
        success: false,
        error: 'Record not found',
      } as ApiResponse);
      return;
    }
  }

  // Unknown errors
  logger.error('Unhandled error', {
    error: err.message,
    stack: err.stack,
    name: err.name,
  });

  const statusCode = (err as any).statusCode || 500;
  const message =
    process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message;

  res.status(statusCode).json({
    success: false,
    error: message,
  } as ApiResponse);
}

// ─── 404 Handler ──────────────────────────────────────
export function notFoundHandler(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: `Route ${req.method} ${req.originalUrl} not found`,
  } as ApiResponse);
}
