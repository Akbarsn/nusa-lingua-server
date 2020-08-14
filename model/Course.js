const mongoose = require('mongoose')
const { string } = require('joi')
const schema = mongoose.Schema

const CourseSchema = new schema({
    title: String,
    language: String,
    mentor: String,
    duration: Number, //In Hours
    topics: [
        {
            title: String,
            content: String,
            videoURI: String
        }
    ],
    userJoined: Number
}, { timestamps: {}})

module.exports = mongoose.model("Course", CourseSchema)