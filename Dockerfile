#TODO: Review all this Dockerfile
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI="true"
RUN corepack enable
WORKDIR /app

# 1. Construcción
FROM base AS build
COPY pnpm-lock.yaml package.json ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# 2. Runtime
FROM base AS runtime
# Copiamos TODO lo de build para que pnpm encuentre astro y sus dependencias
COPY --from=build /app /app

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

# Usamos 'pnpm exec' para que resuelva el binario de astro correctamente
# El flag --allowed-hosts va DESPUÉS de preview
CMD [ "pnpm", "astro", "preview", "--host", "0.0.0.0", "--allowed-hosts", "ctrl4dev.online,www.ctrl4dev.online" ]