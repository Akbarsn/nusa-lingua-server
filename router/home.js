const router = require('express').Router()
const {
    GetAllLanguage,
    GetLatestCourse,
    GetPopularCourse,
    GetAllCourse,
    GetHomePage,
} = require('../handler/home')

router.get('/language', GetAllLanguage)

router.get('/:language', GetHomePage)

router.get('/course/:language', GetAllCourse)

router.get('/popular/:language', GetPopularCourse)

router.get('/latest/:language', GetLatestCourse)


module.exports = router