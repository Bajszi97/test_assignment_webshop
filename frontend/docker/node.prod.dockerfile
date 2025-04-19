# Build stage
FROM node:23-alpine as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Serve with nginx
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

COPY /docker/nginx.conf /etc/nginx/conf.d/default.conf
