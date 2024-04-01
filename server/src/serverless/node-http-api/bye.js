const handler = async (event) => {
    console.log("GoodBye!")

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'GoodBye from serverless API!'
        })
    }
}

module.exports = {
    handler
}