FROM node:16.17.0-bullseye-slim AS build
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g npm@9.4.0
RUN npm install --omit=dev

FROM gcr.io/distroless/nodejs:16
COPY --from=build /usr/src/app /usr/src/app
WORKDIR /usr/src/app
ENV NODE_ENV=production
CMD ["server.js"]
