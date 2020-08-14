const router = require('express').Router()
const {
    GetAllLanguage,
    GetLatestCourse,
    GetPopularCourse,
    GetAllCourse,
    GetTopicsBasedOnCourseID
} = require('../handler/home')

router.get('/language', GetAllLanguage)

router.get('/course/:language', GetAllCourse)

router.get('/popular/language', GetPopularCourse)

router.get('/latest/:language', GetLatestCourse)

router.get('/topics', GetTopicsBasedOnCourseID)

module.exports = router