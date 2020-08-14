const router = require('express').Router()
const User = require('./model/User')
const Language = require('./model/Language')
const Course = require('./model/Course')

router.get("/ping", (req, res) => {
    res.status(200).json({
        message: "Pong"
    })
})

router.get('/migrate', async (req, res, next) => {
    try {
        //Migrate User
        await User.deleteMany({})
        await User.insertMany([
            {
                fullName: "Akbarsn",
                email: "akbarsn@gmail.com",
                username: "akbarsn",
                password: "123"
            },
            {
                fullName: "Ucup",
                email: "yusuf@gmail.com",
                username: "yusuf",
                password: "123"
            },
            {
                fullName: "Safira",
                email: "safira@gmail.com",
                username: "safira",
                password: "123"
            },
            {
                fullName: "Sasi",
                email: "sasi@gmail.com",
                username: "sasi",
                password: "123"
            }
        ])

        await Language.deleteMany({})
        await Language.insertMany([
            {
                name: "Jawa"
            },
            {
                name: "Sunda"
            },
            {
                name: "Madura"
            },
        ])

        await Course.deleteMany({})
        await Course.insertMany([
            {
                title: "",
                language: "",
                mentor: "",
                duration: 0,
                userJoined: 0,
                topics: [
                    {
                        title: "",
                        content: "",
                        videoURI: ""
                    }
                ],
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
        ])

        res.send("Migrate Completed")

    } catch (error) {
        next(error)
    }
})

module.exports = router