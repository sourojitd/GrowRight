import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { config } from './config';
import { requestLogger } from './middleware/requestLogger';
import { globalErrorHandler, notFoundHandler } from './middleware/errorHandler';
import { apiLimiter } from './middleware/rateLimiter';
import { prisma } from './config/database';

// Route imports
import authRoutes from './modules/auth/auth.routes';
import usersRoutes from './modules/users/users.routes';
import childrenRoutes from './modules/children/children.routes';
import milestonesRoutes from './modules/milestones/milestones.routes';
import activitiesRoutes from './modules/activities/activities.routes';
import toysRoutes from './modules/toys/toys.routes';
import syllabusRoutes from './modules/syllabus/syllabus.routes';
import roadmapRoutes from './modules/roadmap/roadmap.routes';
import vaccinationsRoutes from './modules/vaccinations/vaccinations.routes';
import adminRoutes from './modules/admin/admin.routes';
import invitesRoutes from './modules/invites/invites.routes';

const app = express();

// Trust Railway/Nginx proxy (needed for rate limiting and IP detection)
app.set('trust proxy', 1);

// ─── Security ─────────────────────────────────────────
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
      },
    },
    crossOriginEmbedderPolicy: false, // Allow loading cross-origin images
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  })
);
app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(hpp());

// ─── Parsing ──────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

// ─── Logging ──────────────────────────────────────────
app.use(requestLogger);

// ─── Rate Limiting ────────────────────────────────────
app.use(`/api/${config.API_VERSION}`, apiLimiter);

// ─── Health Check ─────────────────────────────────────
app.get('/health', async (_req, res) => {
  let dbStatus = 'ok';
  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch {
    dbStatus = 'error';
  }

  const status = dbStatus === 'ok' ? 'ok' : 'degraded';
  res.status(status === 'ok' ? 200 : 503).json({
    status,
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '0.1.0',
    environment: config.NODE_ENV,
    services: { database: dbStatus },
  });
});

// ─── API Routes ───────────────────────────────────────
const apiPrefix = `/api/${config.API_VERSION}`;

app.use(`${apiPrefix}/auth`, authRoutes);
app.use(`${apiPrefix}/users`, usersRoutes);
app.use(`${apiPrefix}/children`, childrenRoutes);
app.use(`${apiPrefix}/milestones`, milestonesRoutes);
app.use(`${apiPrefix}/activities`, activitiesRoutes);
app.use(`${apiPrefix}/toys`, toysRoutes);
app.use(`${apiPrefix}/syllabus`, syllabusRoutes);
app.use(`${apiPrefix}/roadmaps`, roadmapRoutes);
app.use(`${apiPrefix}/vaccinations`, vaccinationsRoutes);
app.use(`${apiPrefix}/admin`, adminRoutes);
app.use(`${apiPrefix}`, invitesRoutes);

// ─── Error Handling ───────────────────────────────────
app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;
