const mongoose = require('mongoose')
const Course = require('../model/Course')
const User = require('../model/User')
const { GeneralError, BadRequest } = require('../utils/errors')
const { updateOne } = require('../model/Course')

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
        const topicID =  mongoose.Types.ObjectId(req.params.topicID)
        
        try {
            const course = await Course.findById(courseID)
            if(course){
                const topic = course.topics.find((element)=> element.id === topicID);

                if(typeof topic !== 'undefined'){
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
            if(courses.find((e)=> e.title !== course.title)){
                courses.push({
                    title: course.title,
                    progress: 0
                })
            }

            const update = await User.updateOne({ _id: userID }, { courses: courses })

            if(update.ok !== 0){
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
        const topicID = mongoose.Types.ObjectId(req.params.topicID)
        const userID = mongoose.Types.ObjectId(req.user.id)

        try {
            const course = await Course.findById(courseID)

            if(course){
                const userCourse = user.courses.forEach(e => {
                    if(e.title === course.title){   
                        e.progress = Math.round(topicID / course.topics.length) 
                    }
                });
                
                const user = await updateOne({_id: userID}, {courses: userCourse})
            
                const topic = course.topics.find((e)=> e.id === topicID)
                res.status(200).json(topic)
            } else {
                throw new BadRequest("Course not found")
            }
        } catch (error) {
            next(error)
        }
    },

    async TakeExam(req, res, next) {

    },
    
    async PostExam(req, res, next) {

    }
}