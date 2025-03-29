FROM nginx:stable-alpine

ARG UID
ARG GID

ENV UID=${UID}
ENV GID=${GID}

RUN addgroup -g ${GID} --system webserver
RUN adduser -G webserver --system -D -s /bin/sh -u ${UID} webserver
RUN sed -i "s/user  nginx/user webserver/g" /etc/nginx/nginx.conf

COPY default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/backend


