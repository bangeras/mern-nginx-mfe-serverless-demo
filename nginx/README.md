
# Install Docker Image

## Build Docker Image
docker build -t omsairam-nginx:latest .

## Remove Docker Image
docker rmi -f omsairam-nginx:latest

## Create and run a container
$ ipconfig getifaddr en1
 
docker container run -d -p 80:80 -v ./logs:/var/log/nginx --add-host=localbox:192.168.1.10 --name omsairam-nginx omsairam-nginx:latest

## Stop the container
docker container stop omsairam-nginx

## Restart the container
docker container start omsairam-nginx

## Stopping and removing a container
docker rm -f omsairam-nginx

## Removing the image
docker rmi -f omsairam-nginx:latest


# Install SSL

## Obtain SSL certs from letsencrypt
Work in progress....

