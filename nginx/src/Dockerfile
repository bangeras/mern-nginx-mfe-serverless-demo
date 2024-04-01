FROM ubuntu:latest

# Install NGINX
RUN apt-get update && \
    apt-get install -y nginx

# Copy custom configuration file to NGINX configuration directory
COPY nginx.conf /etc/nginx/sites-available/default
COPY index.html /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]

# Install certbot for getting SSL certificates from letsencrypt
# RUN apt-get install -y certbot python3-certbot-nginx