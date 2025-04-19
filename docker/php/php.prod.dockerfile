# Build stage
FROM composer:2 AS build

WORKDIR /app

COPY ./backend .

RUN composer install --no-dev --optimize-autoloader

# Final stage
FROM php:8.4-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /var/www/html

COPY --from=build /app /var/www/html

RUN chown -R www-data:www-data /var/www/html