const router = require('express').Router()

const {
    GetProfile,
    GetOngoingCourse,
    GetCompletedCourse,
    GetAllCourse
} = require('../handler/user')

router.get('/', GetProfile)

router.get('/ongoing', GetOngoingCourse)

router.get('/completed', GetCompletedCourse)

router.get('/courses', GetAllCourse)

module.exports = router