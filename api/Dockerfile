FROM oven/bun:latest AS build

WORKDIR /app

COPY . .

RUN bun install

FROM oven/bun:latest AS runtime

RUN apt update && apt upgrade -y && apt install -y ca-certificates ffmpeg

COPY --from=build /app /app

WORKDIR /app/api

ENTRYPOINT ["bun", "start"]
