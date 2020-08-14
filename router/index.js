const router = require('express').Router()
const authRouter = require('./auth')
const homeRouter = require('./home')

const {CheckToken} = require('../middleware/AuthMiddleware')

router.use('/auth', authRouter)

router.use('/', CheckToken, homeRouter) 

module.exports = router