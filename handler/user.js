const User = require('../model/User')
const { BadRequest } = require('../utils/errors')

module.exports = {
    async GetProfile(req, res, next) {
        const userID = req.user.id

        console.log(typeof userID)
        try {
            const user = await User.findById(userID)

            if (user) {
                res.status(200).json(user)
            } else {
                throw new BadRequest("User did not found")
            }
        } catch (error) {
            next(error)
        }
    },
    async GetOngoingCourse(req, res, next) {
        const userID = req.user.id

        try {
            const user = await User.findById(userID)

            let courses = []

            user.courses.forEach((course) => {
                if (course.progress < 100 || !course.isGraduate) {
                    courses.push(course)
                }
            })

            if (user) {
                res.status(200).json(courses)
            } else {
                throw new BadRequest("User not found")
            }
        } catch (error) {
            next(error)
        }
    },
    async GetCompletedCourse(req, res, next) {
        const userID = req.user.id

        try {
            const user = await User.findById(userID)

            let courses = []

            user.courses.forEach((course) => {
                if (course.progress == 100 || course.isGraduate) {
                    courses.push(course)
                }
            })

            if (user) {
                res.status(200).json(courses)
            } else {
                throw new BadRequest("User not found")
            }
        } catch (error) {
            next(error)
        }
    },
    async GetAllCourse(req, res, next) {
        const userID = req.user.id

        try {
            const user = await User.findById(userID)

            if (user) {
                res.status(200).json(user.courses)
            } else {
                throw new BadRequest("User not found")
            }
        } catch (error) {
            next(error)
        }
    }
}