FROM php:8.2-cli

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    git curl zip unzip libsqlite3-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo pdo_sqlite sqlite3 mbstring xml bcmath ctype \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy composer files first for layer caching
COPY composer.json composer.lock ./
RUN composer install --optimize-autoloader --no-dev --no-scripts --no-interaction

# Copy the rest of the application
COPY . .

# Create SQLite database file
RUN touch database/database.sqlite \
    && php artisan config:clear \
    && php artisan route:clear \
    && php artisan migrate --force

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=${PORT:-8000}
