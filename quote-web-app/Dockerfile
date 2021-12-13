FROM node:latest as build-stage
ENV API=localhost:5000
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build
RUN ls && sleep 5

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf