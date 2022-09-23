FROM docker.io/node:18

WORKDIR /app
COPY . /app

ARG PORT

ENV PORT="${PORT}"

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