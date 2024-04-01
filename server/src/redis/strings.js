const {redis, disconnect} = require("./redis")

const init = async () => {
    await redis.set("msg:4", "Hello from Mishti")
    const result = await redis.get("msg:4")
    disconnect()
    return result
}
init().then((result) => console.log(result))