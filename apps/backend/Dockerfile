FROM docker.io/node:18

WORKDIR /app
COPY . /app

ARG PORT
ARG DB_HOST
ARG DB_PORT
ARG DB_USER
ARG DB_PSWD
ARG DB_NAME

ENV PORT="${PORT}"
ENV DB_HOST="${DB_HOST}"
ENV DB_PORT="${DB_PORT}"
ENV DB_USER="${DB_USER}"
ENV DB_PSWD="${DB_PSWD}"
ENV DB_NAME="${DB_NAME}"

# Installing only the required packages.
RUN npm install --global pnpm                 \
   && pnpm install                            \
   --frozen-lockfile                       \
   --workspace-root                        \
   && pnpm install                            \
   --frozen-lockfile                       \
   --ignore-scripts                        \
   --filter '@pokedex/backend...' 

CMD [                                          \
   "pnpm",                                     \
   "run",                                      \
   "--workspace-root",                      \
   "--filter", "@pokedex/backend", \
   "start:dev"                                     \
   ]