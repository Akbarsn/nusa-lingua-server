const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    // _id: Number,
    fullName: String,
    username: String,
    password: String,
    email: String,
    courses: [
        {
            courseID: mongoose.Schema.Types.ObjectId,
            title: String,
            progress: {type: Number, default: 0}, //Max 100
            isGraduate: {type: Boolean, default: false}
        }
    ]
})

module.exports = mongoose.model("User", UserSchema)