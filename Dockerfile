# syntax=docker/dockerfile:1

# ---- Base ----
FROM node:22-bookworm-slim AS base
RUN corepack enable
WORKDIR /app

# ---- Dependencies ----
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./
RUN pnpm install --frozen-lockfile

# ---- Builder ----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build --webpack

# ---- Runner ----
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=4082
ENV HOSTNAME=0.0.0.0

# Non-root user for security
RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 4082

CMD ["node", "server.js"]
