FROM php:8.2-apache

# Activer les extensions PHP nécessaires
RUN docker-php-ext-install pdo pdo_mysql mysqli

# Activer mod_rewrite pour Apache
RUN a2enmod rewrite

# Configurer Apache pour autoriser .htaccess
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

# Copier tous les fichiers du projet dans le répertoire web
COPY . /var/www/html/

# Donner les bonnes permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

EXPOSE 80
