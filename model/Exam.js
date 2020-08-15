const mongoose = require('mongoose')

const ExamSchema = new mongoose.Schema({
    courseID: mongoose.Schema.Types.ObjectId,
    questions: [
        {
            id: Number,
            question: String,
            answerA: String,
            answerB: String,
            answerC: String,
            answerD: String,
        }
    ],
    answer:[
        {
            id: Number,
            answer: String
        }
    ]
})

module.exports = mongoose.model("Exam", ExamSchema)