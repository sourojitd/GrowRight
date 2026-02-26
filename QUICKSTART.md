# GrowRight — Quick Start Guide

Get GrowRight running on your machine in under 10 minutes.

<!-- Author: Sourojit D <soft.jd4u@gmail.com> -->

---

## Prerequisites

| Tool | Version | Check |
|------|---------|-------|
| **Node.js** | 18+ | `node -v` |
| **npm** | 9+ | `npm -v` |
| **Docker** + **Docker Compose** | Latest | `docker compose version` |
| **Git** | Any | `git --version` |

> **Windows users:** Use [Docker Desktop](https://www.docker.com/products/docker-desktop/) and run commands in Git Bash or Windows Terminal.

---

## 1. Clone the Repository

```bash
git clone https://github.com/sourojitd/GrowRight.git
cd GrowRight
```

---

## 2. Set Up Environment Variables

```bash
cp .env.example .env
```

The defaults work out of the box for local development. If you want to customise anything, edit `.env`:

```env
# The only values you SHOULD change for security:
JWT_ACCESS_SECRET=your-random-string-at-least-32-chars
JWT_REFRESH_SECRET=another-random-string-at-least-32-chars
```

Generate secure secrets:

```bash
# Linux/Mac
openssl rand -hex 32

# PowerShell
-join ((1..32) | ForEach-Object { '{0:x2}' -f (Get-Random -Max 256) })
```

---

## 3. Start PostgreSQL and Redis

```bash
docker compose up -d postgres redis
```

Wait a few seconds for the health checks to pass:

```bash
docker compose ps
```

You should see both `growright-db` and `growright-redis` as **running (healthy)**.

> **Already have Postgres/Redis locally?** Skip Docker and update `DATABASE_URL` and `REDIS_URL` in `.env` to point to your instances.

---

## 4. Install Dependencies

```bash
# Root (installs concurrently)
npm install

# Server
cd server && npm install

# Client
cd ../client && npm install

cd ..
```

---

## 5. Set Up the Database

```bash
cd server

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed with sample data (175 milestones, 102 activities, 220 syllabi, feature flags)
npx prisma db seed

cd ..
```

---

## 6. Start the App

```bash
npm run dev
```

This starts both the server (port 4000) and client (port 5173) concurrently.

---

## 7. Open in Browser

Go to **http://localhost:5173**

### Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| **Parent** | `parent@demo.com` | `Parent@123456` |
| **Admin** | `admin@growright.app` | `Admin@123456` |

---

## Alternative: Full Docker Setup

If you prefer running everything in Docker (no local Node.js needed for running):

```bash
# Build and start all services
docker compose up -d --build

# Run migrations and seed inside the server container
docker exec growright-server npx prisma migrate dev
docker exec growright-server npx prisma db seed
```

Open **http://localhost:5173**.

---

## Useful Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start server + client in dev mode |
| `npm run dev:server` | Start only the server |
| `npm run dev:client` | Start only the client |
| `npm run build` | Build both for production |
| `npm run db:migrate` | Run pending migrations |
| `npm run db:seed` | Re-seed the database |
| `npm run db:studio` | Open Prisma Studio (visual DB editor) |
| `npm run docker:up` | Start all Docker containers |
| `npm run docker:down` | Stop all Docker containers |

---

## Explore the Database

```bash
cd server && npx prisma studio
```

Opens a web UI at **http://localhost:5555** where you can browse all tables, edit records, and inspect relationships.

---

## Project Ports

| Service | URL | Purpose |
|---------|-----|---------|
| Client | http://localhost:5173 | React app |
| Server API | http://localhost:4000/api/v1 | REST API |
| Prisma Studio | http://localhost:5555 | DB viewer |
| PostgreSQL | localhost:5433 | Database (Docker maps 5433 → 5432) |
| Redis | localhost:6380 | Cache (Docker maps 6380 → 6379) |
| Health Check | http://localhost:4000/health | Server status |

---

## Troubleshooting

### "Port 5433 already in use"

Another PostgreSQL is running. Either stop it or change the port mapping in `docker-compose.yml`.

### "Cannot connect to database"

Make sure Docker containers are healthy: `docker compose ps`. If postgres shows "starting", wait a few more seconds.

### "Prisma migration failed"

```bash
cd server
npx prisma migrate reset    # WARNING: drops all data
npx prisma db seed
```

### "Module not found" errors

```bash
cd server && npm install && cd ../client && npm install && cd ..
```

### Redis connection errors

Ensure Redis is running: `docker compose up -d redis`. Check `REDIS_URL` in `.env` matches the Docker port mapping.

---

## What's Next?

- **Add your child** — Go to Children → Add Child
- **Track milestones** — Navigate to Milestones and mark achievements
- **Generate a roadmap** — Go to Roadmap → Generate for your child
- **Compare syllabi** — Check out the Syllabus page for CBSE/ICSE/IB comparisons
- **Admin features** — Log in as admin to manage flags and users
- **Deploy** — See [DEPLOYMENT.md](DEPLOYMENT.md) for production VPS setup

---

<sub>GrowRight — Created by Sourojit D</sub>
