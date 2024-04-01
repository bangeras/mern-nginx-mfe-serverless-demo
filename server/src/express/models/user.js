const {mongoose} = require("../config/mongooseConfig")

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        gender: {
            type: String,
            required: false
        }
    }, 
    {timestamps: true}
)

const User = mongoose.model("user", userSchema)

module.exports = {
    User
}