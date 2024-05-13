# Use a slim Node.js image as the base
FROM node:20.12.0-alpine3.19

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm","run","dev"]

