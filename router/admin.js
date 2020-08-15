const router = require('express').Router()

const {
    GetAllUser,
    GetAllExam
} = require('../handler/admin') 

router.get('/user', GetAllUser)

router.get('/exam', GetAllExam)

module.exports = router