const router = require('express').Router()
const authRouter = require('./auth')
const homeRouter = require('./home')
const courseRouter = require('./course')
const userRouter = require('./user')

const {CheckToken} = require('../middleware/AuthMiddleware')

router.use('/auth', authRouter)

router.use('/home', CheckToken, homeRouter)

router.use('/course', CheckToken, courseRouter)

router.use('/user', CheckToken, userRouter)

module.exports = router