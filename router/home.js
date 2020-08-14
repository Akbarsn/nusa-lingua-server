const router = require('express').Router()
const {
    GetAllLanguage,
    GetLatestCourse,
    GetPopularCourse,
    GetAllCourse,
    GetHomePage,
    GetTopicsBasedOnCourseID
} = require('../handler/home')

router.get('/language', GetAllLanguage)

router.get('/course/:language', GetAllCourse)

router.get('/popular/:language', GetPopularCourse)

router.get('/latest/:language', GetLatestCourse)

router.get('/topics', GetTopicsBasedOnCourseID)

router.get('/home/:language', GetHomePage)

module.exports = router