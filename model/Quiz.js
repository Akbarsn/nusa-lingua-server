const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    courseID: mongoose.Schema.Types.ObjectId,
    questions: [
        {   
            type: Number,
            question: String,
            answerA: String,
            answerB: String,
            answerC: String,
            answerD: String
        }
    ]
})