FROM php:8.4-fpm-alpine

ARG UID
ARG GID

ENV UID=${UID}
ENV GID=${GID}

RUN mkdir -p /var/www/html

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

RUN addgroup -g ${GID} --system webserver
RUN adduser -G webserver --system -D -s /bin/sh -u ${UID} webserver

RUN sed -i "s/user = www-data/user = webserver/g" /usr/local/etc/php-fpm.d/www.conf
RUN sed -i "s/group = www-data/group = webserver/g" /usr/local/etc/php-fpm.d/www.conf
RUN echo "php_admin_flag[log_errors] = on" >> /usr/local/etc/php-fpm.d/www.conf

# PHP extensions:
RUN docker-php-ext-install pdo pdo_mysql
    
USER webserver

CMD ["php-fpm"]