FROM node:20.9-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm i --silent

COPY . /app/

RUN npm run build
RUN npm install -g serve

CMD serve -s dist -l ${FRONT_APP_PORT}