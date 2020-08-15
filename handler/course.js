const mongoose = require('mongoose')
const joi = require('joi')
const Course = require('../model/Course')
const User = require('../model/User')
const Exam = require('../model/Exam')
const { GeneralError, BadRequest, NotAcceptable } = require('../utils/errors')
const e = require('express')
const { valid } = require('joi')

module.exports = {
    async GetCourseDetailByID(req, res, next) {
        const courseID = mongoose.Types.ObjectId(req.params.id)

        try {
            const course = await Course.findById(courseID)

            if (course) {
                res.status(200).json(course)
            } else {
                throw new BadRequest("Query error")
            }
        } catch (error) {
            next(error)
        }
    },

    async GetTopicByID(req, res, next) {
        const courseID = mongoose.Types.ObjectId(req.params.courseID)
        const topicID = req.params.topicID

        try {
            const course = await Course.findById(courseID)
            if (course) {
                const topic = course.topics.find((e) => e.id == topicID);

                if (typeof topic !== 'undefined') {
                    res.status(200).json(topic)
                } else {
                    throw new BadRequest("Topic not found")
                }
            } else {
                throw new BadRequest("Course not found")
            }
        } catch (error) {
            next(error)
        }
    },

    async JoinCourse(req, res, next) {
        const userID = mongoose.Types.ObjectId(req.user.id)
        const courseID = mongoose.Types.ObjectId(req.params.id)

        try {
            const course = await Course.findById(courseID)
            const user = await User.findById(userID)

            const courses = user.courses
            if (!courses.find((e) => e.title === course.title)) {
                courses.push({
                    courseID: courseID,
                    title: course.title,
                })
            }

            const update = await User.updateOne({ _id: userID }, { courses: courses })

            if (update.ok !== 0) {
                const updatedCourse = await Course.updateOne({ _id: courseID }, { userJoined: course.userJoined + 1 })

                if (updatedCourse) {
                    res.status(200).json(course)
                } else {
                    throw new GeneralError('Query Error')
                }
            } else {
                throw new GeneralError("Update failed")
            }
        } catch (error) {
            next(error)
        }
    },

    async NextTopic(req, res, next) {
        const courseID = mongoose.Types.ObjectId(req.params.courseID)
        const topicID = req.params.topicID
        const userID = mongoose.Types.ObjectId(req.user.id)

        try {
            const course = await Course.findById(courseID)

            if (course) {
                const user = await User.findById(userID)
                if (user) {
                    let updatedCourses = []
                    user.courses.forEach(e => {
                        if (e.title === course.title) {
                            if (e.progress <= Math.round(topicID * 100 / course.topics.length)) {
                                e.progress = Math.round(topicID * 100 / course.topics.length)
                            }
                        }

                        updatedCourses.push(e)
                    });

                    await User.updateOne({ _id: userID }, { courses: updatedCourses })

                    const topic = course.topics.find((e) => e.id == topicID)
                    res.status(200).json(topic)
                } else {
                    throw new GeneralError("User not found")
                }
            } else {
                throw new BadRequest("Course not found")
            }
        } catch (error) {
            next(error)
        }
    },

    async TakeExam(req, res, next) {
        const courseID = req.params.courseID
        const userID = mongoose.Types.ObjectId(req.user.id)

        try {
            const user = await User.findById(userID)
            const course = user.courses.find((e) => `${e.courseID}` == courseID)

            if (course.progress >= 100) {
                const exam = await Exam.findOne({ courseID: course.courseID })

                if (exam) {
                    res.status(200).json(exam.questions)
                } else {
                    throw new GeneralError("Question not found")
                }
            } else {
                throw new NotAcceptable("Courses not yet finished")
            }
        } catch (error) {
            next(error)
        }
    },

    async PostExam(req, res, next) {
        const courseID = req.params.courseID
        const userID = mongoose.Types.ObjectId(req.user.id)

        try {
            const schema = joi.array().items(joi.object({
                id: joi.number().required(),
                answer: joi.string().max(1).required()
            }))

            const validateReq = await schema.validateAsync(req.body)

            if (validateReq.error !== null) {
                const answers = validateReq
                
                const user = await User.findById(userID)
                const exam = await Exam.findOne({ courseID: courseID })

                if (exam) {
                    const courses = user.courses.find((e) => e.courseID == courseID)
                    if (!courses.isGraduate) {
                        let correct = 0

                        answers.forEach((answer) => {
                            exam.answer.forEach((key) => {
                                if (answer.id == key.id) {
                                    if (answer.answer === key.answer) correct++;
                                }
                            })
                        })

                        
                        const score = Math.round(correct * 100 / answers.length)
                        if (score >= 80) {
                            var updatedCourse = []

                            user.courses.forEach((course) => {
                                if (course.courseID == courseID) {
                                    course.isGraduate = true
                                }

                                updatedCourse.push(course)
                            })

                            await User.updateOne({ _id: userID }, { courses: updatedCourse })
                        }
                        res.status(200).json({
                            message: score >= 80 ? "Congrats you graduated from this course" : "So close, please try this test again",
                            score: score
                        })
                    } else {
                        throw new NotAcceptable("You already graduated from this course")
                    }
                } else {
                    throw new BadRequest("Exam not found")
                }
            } else {
                throw new BadRequest("Data is missing or invalid")
            }
        } catch (error) {
            next(error)
        }
    }
}