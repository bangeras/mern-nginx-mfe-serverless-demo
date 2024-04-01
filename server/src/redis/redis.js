const {Redis} = require("ioredis")

redis = new Redis()

// Optionally, handle connection errors
redis.on('error', (error) => {
    console.error('Error connecting to Redis:', error);
});

// Close the connection to Redis
const disconnect = () => {
    redis.quit((err, reply) => {
        if (err) {
            console.error('Error closing Redis connection:', err);
        } else {
            console.log('Redis connection closed:', reply);
        }
    });
}


module.exports = {
    redis,
    disconnect
}