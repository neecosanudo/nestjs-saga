# Development
FROM node:16.17.0 AS development

RUN mkdir /usr/app && chown node:node /usr/app

USER node

WORKDIR /usr/app

COPY --chown=node:node ["package*.json", "./"]

RUN npm install

COPY ./ ./
