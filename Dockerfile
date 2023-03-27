# Base image
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent
# Bundle app source
COPY . .