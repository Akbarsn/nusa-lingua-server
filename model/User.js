const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserSchema = schema({
    // _id: Number,
    fullName: String,
    username: String,
    password: String,
    email: String,
    courses: [
        {
            title: String,
            progress: Number //Max 100
        }
    ]
})

module.exports = mongoose.model("User", UserSchema)