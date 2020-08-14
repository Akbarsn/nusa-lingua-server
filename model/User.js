const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserSchema = schema({
    // _id: Number,
    fullName: String,
    username: String,
    password: String,
    email: String
})

module.exports = mongoose.model("User", UserSchema)