const handler = async (event) => {
    console.log("Hello!")

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Hello from serverless API!'
        })
    }
}

module.exports = {
    handler
}