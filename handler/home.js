const course = require('../model/Course')
const language = require('../model/Language')

const { GeneralError } = require('../utils/errors')

module.exports = {
    async GetAllLanguage(req, res, next) {
        try {
            const allLanguage = await language.find({})

            if (allLanguage) {
                res.status(200).json(allLanguage)
            } else {
                throw new GeneralError("Query failed")
            }
        } catch (error) {
            next(error)
        }
    },
    async GetLatestCourse(req, res, next) {
        try {
            const language = req.params.language
            const latestCourse = await course.find({ language: language }).sort({ createdAt: desc }).limit(3)

            if (latestCourse) {
                res.status(200).json(latestCourse)
            } else {
                throw new GeneralError("Query failed")
            }
        } catch (error) {
            next(error)
        }
    },
    async GetPopularCourse(req, res, next) {
        try {
            const language = req.params.language
            const popularCourse = await course.find({ language: language }).sort({ userJoined: desc }).limit(3)

            if (popularCourse) {
                res.status(200).json(popularCourse)
            } else {
                throw new GeneralError("Query failed")
            }
        } catch (error) {
            next(error)
        }
    },
    async GetAllCourse(req, res, next) {
        try {
            const language = req.params.language
            const courses = await course.find({ language: language })

            if (courses) {
                res.status(200).json(courses)
            } else {
                throw new GeneralError("Query failed")
            }
        } catch (error) {
            next(error)
        }
    },
    async GetTopicsBasedOnCourseID(req, res, next) {

    }
}