FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
COPY prisma ./prisma/
RUN npm ci

# Generate Prisma client
RUN npx prisma generate

# ─── Development ───────────────────────────────────────
FROM base AS development
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]

# ─── Build ─────────────────────────────────────────────
FROM base AS build
COPY . .
RUN npm run build

# ─── Production ────────────────────────────────────────
FROM node:20-alpine AS production
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/package.json ./

ENV NODE_ENV=production
EXPOSE 4000

# Run migrations then start
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/server.js"]
