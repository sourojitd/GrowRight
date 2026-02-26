<p align="center">
  <img src="client/public/favicon.svg" width="64" height="64" alt="GrowRight" />
</p>

<h1 align="center">GrowRight</h1>

<p align="center">
  <strong>Child development tracking &amp; school syllabus comparison platform</strong><br/>
  Track milestones (0–5 years) · Discover activities · Compare CBSE / ICSE / IB syllabi · AI-powered roadmaps
</p>

<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img alt="React 19" src="https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=black" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" />
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL_16-4169E1?logo=postgresql&logoColor=white" />
  <img alt="Redis" src="https://img.shields.io/badge/Redis_7-DC382D?logo=redis&logoColor=white" />
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## Overview

GrowRight helps parents monitor their child's developmental milestones, discover age-appropriate activities, compare Indian school board syllabi (CBSE, ICSE, IB — Classes 1–12), and generate personalised development roadmaps. The platform is free by default with an admin-toggleable feature flag that switches between free mode (unlimited, donate-supported) and paid subscription tiers.

<!-- Created and maintained by Sourojit D (soft.jd4u@gmail.com) -->

## Features

| Category | What it does |
|---|---|
| **Milestone Tracking** | 175+ developmental milestones across motor, cognitive, language, social, and self-care domains for ages 0–60 months |
| **Activity Library** | 100+ curated activities with materials, instructions, and age ranges |
| **Syllabus Comparator** | Side-by-side comparison of CBSE, ICSE, and IB curricula — 220 subject-grade entries with 1,700+ topics |
| **Development Roadmaps** | AI-powered (or manual fallback) personalised plans per child |
| **Multi-Child Support** | Track multiple children from a single parent account |
| **Admin Dashboard** | Manage users, feature flags, audit logs, and system health |
| **Free / Paid Modes** | `free_version` feature flag for admin-controlled monetisation |

## Tech Stack

```
┌─────────────────────────────────────────────────────────┐
│  Client                                                  │
│  React 19 · TypeScript · Vite · TailwindCSS             │
│  Framer Motion · TanStack Query · Zustand · Recharts    │
├─────────────────────────────────────────────────────────┤
│  Server                                                  │
│  Node.js · TypeScript · Express · Prisma ORM            │
│  Zod validation · JWT auth · RBAC · BullMQ queues       │
├─────────────────────────────────────────────────────────┤
│  Data                                                    │
│  PostgreSQL 16 · Redis 7 · Docker Compose               │
└─────────────────────────────────────────────────────────┘
```

## Architecture

```
Internet
   │
   ▼
┌──────────────────────────────┐
│  Nginx (reverse proxy + SSL) │
└──────┬──────────┬────────────┘
       │          │
  /api/*     everything else
       │          │
       ▼          ▼
┌──────────┐ ┌──────────┐
│  Server  │ │  Client  │   Docker containers
│  :4000   │ │  :5173   │
│  Express │ │  Vite    │
└────┬─────┘ └──────────┘
     │
     ├──────────────┐
     ▼              ▼
┌──────────┐ ┌──────────┐
│ Postgres │ │  Redis   │   Docker containers
│  :5432   │ │  :6379   │
└──────────┘ └──────────┘
```

## Quick Start

> Full step-by-step instructions: **[QUICKSTART.md](QUICKSTART.md)**

```bash
# 1. Clone
git clone https://github.com/sourojitd/GrowRight.git
cd GrowRight

# 2. Environment
cp .env.example .env

# 3. Start services
docker compose up -d

# 4. Migrate & seed
cd server
npx prisma migrate dev
npx prisma db seed

# 5. Install & run
cd .. && npm install
npm run dev
```

Open **http://localhost:5173** — login with `parent@demo.com` / `Parent@123456`.

## Project Structure

```
GrowRight/
├── client/                     React 19 SPA
│   ├── src/
│   │   ├── components/         UI kit + layout
│   │   ├── hooks/              useAuth, useChildren, useFeatureFlags
│   │   ├── lib/                API client, utilities
│   │   ├── pages/              Route pages
│   │   ├── stores/             Zustand stores
│   │   └── styles/             Tailwind globals
│   └── vite.config.ts
├── server/                     Express API
│   ├── prisma/
│   │   ├── schema.prisma       Database schema
│   │   ├── seed.ts             Seed data
│   │   └── data/               Milestones, activities, syllabi
│   └── src/
│       ├── modules/            Domain modules (auth, children, milestones, etc.)
│       ├── services/           AI, cache, feature flags, queue
│       ├── middleware/         Auth, validation, rate limiting, errors
│       └── utils/              Constants, helpers
├── docker-compose.yml          Dev environment
├── QUICKSTART.md               Setup guide
├── DEPLOYMENT.md               Production VPS guide
└── .env.example                Environment template
```

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/auth/register` | — | Register new user |
| POST | `/api/v1/auth/login` | — | Login, get tokens |
| POST | `/api/v1/auth/refresh` | — | Refresh access token |
| GET | `/api/v1/users/profile` | JWT | Get current user |
| GET | `/api/v1/users/feature-flags` | JWT | Get public feature flags |
| GET | `/api/v1/children` | JWT | List children |
| POST | `/api/v1/children` | JWT | Add child |
| GET | `/api/v1/milestones` | JWT | List milestones |
| GET | `/api/v1/activities` | JWT | List activities |
| GET | `/api/v1/syllabus` | JWT | Query syllabi |
| POST | `/api/v1/roadmaps/:childId/generate` | JWT | Generate roadmap |
| GET | `/api/v1/admin/*` | Admin | Admin endpoints |

## Database Schema

Core models: **Users**, **Children**, **Milestones**, **ChildMilestones**, **Activities**, **ChildActivities**, **Syllabi**, **SyllabusTopics**, **Roadmaps**, **Subscriptions**, **FeatureFlags**, **AuditLogs**, **RefreshTokens**.

See [`server/prisma/schema.prisma`](server/prisma/schema.prisma) for the full schema.

## Environment Variables

See [`.env.example`](.env.example) for all variables. Key ones:

| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_URL` | `postgresql://...` | PostgreSQL connection |
| `REDIS_URL` | `redis://localhost:6379` | Redis connection |
| `JWT_ACCESS_SECRET` | — | JWT signing secret (min 32 chars) |
| `JWT_REFRESH_SECRET` | — | Refresh token secret |
| `CLIENT_URL` | `http://localhost:5173` | CORS origin |
| `PORT` | `4000` | Server port |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both server and client in dev mode |
| `npm run build` | Build server and client for production |
| `npm run db:migrate` | Run Prisma migrations |
| `npm run db:seed` | Seed database with sample data |
| `npm run db:studio` | Open Prisma Studio GUI |
| `npm run docker:up` | Start Docker containers |
| `npm run docker:down` | Stop Docker containers |

## Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for a complete Hostinger VPS deployment guide with Docker, Nginx, and Let's Encrypt SSL.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file.

## Author

**Sourojit D** — [soft.jd4u@gmail.com](mailto:soft.jd4u@gmail.com)

Built with care for parents who want to give their children the best start.

<!--
  GrowRight — Copyright (c) 2025-2026 Sourojit D
  Original author: Sourojit D <soft.jd4u@gmail.com>
  This software was designed and developed by Sourojit D.
-->
