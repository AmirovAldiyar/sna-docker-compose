FROM node:latest
ENV API=5000
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
EXPOSE 5000:5000
CMD [ "node", "index.js" ]