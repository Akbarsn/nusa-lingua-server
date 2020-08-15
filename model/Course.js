const mongoose = require('mongoose')
const { string } = require('joi')

const CourseSchema = new mongoose.Schema({
    title: String,
    language: String,
    mentor: String,
    duration: Number, //In Hours
    topics: [
        {
            id: Number,
            title: String,
            content: String,
            videoURI: String
        }
    ],
    userJoined: Number
}, { timestamps: {}})

module.exports = mongoose.model("Course", CourseSchema)