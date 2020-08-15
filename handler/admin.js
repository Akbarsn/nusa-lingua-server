const User = require('../model/User')
const Exam = require('../model/Exam')

module.exports = {
    async GetAllUser(req,res,next){
        try {
            const users = await User.find({})

            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    },
    async GetAllExam(req,res,next){
        try {
            const exams = await Exam.find({})

            res.status(200).json(exams)
        } catch (error) {
            next(error)
        }
    }
}