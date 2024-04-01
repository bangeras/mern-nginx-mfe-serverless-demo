const {redis, disconnect} = require("./redis")


const init = async () => {
    await redis.lpush("bikes:repairs", "bike1")
    await redis.rpush("bikes:repairs", "bike2")
    const result = await redis.lpop("bikes:repairs")
    disconnect()
    return result
}
init().then((result) => console.log(result))