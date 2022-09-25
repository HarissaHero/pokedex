FROM docker.io/node:18

WORKDIR /app
COPY . /app

ARG PORT
ARG APP_BACKEND_INNER_HOST
ARG APP_BACKEND_PORT

ENV PORT="${PORT}"
ENV APP_BACKEND_INNER_HOST="${APP_BACKEND_INNER_HOST}"
ENV APP_BACKEND_PORT="${APP_BACKEND_PORT}"

# Installing only the required packages.
RUN npm install --global pnpm                 \
   && pnpm install                            \
   --frozen-lockfile                       \
   --workspace-root                        \
   && pnpm install                            \
   --frozen-lockfile                       \
   --ignore-scripts                        \
   --filter '@pokedex/web...' \
   && pnpm run build                          \
   --filter '@pokedex/web...'

CMD [                                          \
   "pnpm",                                     \
   "run",                                      \
   "--workspace-root",                      \
   "--filter", "@pokedex/web", \
   "dev"                                     \
   ]