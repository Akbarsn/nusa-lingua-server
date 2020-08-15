const router = require('express').Router()

const {GetProfile} = require('../handler/user')

router.get('/', GetProfile)

module.exports = router