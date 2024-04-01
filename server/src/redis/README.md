
## Build Docker Image
docker build -t omsairam-redis-stack:latest .

## Create and run a container
docker container run -d -p 6379:6379 -p 8001:8001 --name omsairam-redis-stack omsairam-redis-stack:latest
# redis-stack xposes RedisInsight on port 8001. You can use RedisInsight via 
# http://localhost:8001/redis-stack/browser

## Stop the container
docker container stop omsairam-redis-stack

## Restart the container
docker container start omsairam-redis-stack

## Stopping and removing a container
docker rm -f omsairam-redis-stack

# Removing the image
docker rmi -f omsairam-redis-stack:latest

## Connecting to docker container shell
### Get container id
docker container ls

### Connect to the target container shell to use redis-cli
$ docker exec -it 47df9943551e bash
$ redis-cli
127.0.0.1:6379> ping
PONG


## Documentation 
https://redis.io/docs/data-types/
