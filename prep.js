const router = require('express').Router()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('./model/User')
const Language = require('./model/Language')
const Course = require('./model/Course')
const Exam = require('./model/Exam')

router.get('/test', async (req, res) => {
    // await User.updateMany({}, { courses: [] })

    // res.send("Done")

    const courseID = "5f377d9eb6d8516ff8a8cc7a"

    const exam = await Exam.findOne({ courseID: courseID })

    res.send(exam)

})

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
                password: await bcrypt.hash("123", 12)
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
            },
            {
                fullName: "johndoe",
                email: "johndoe@gmail.com",
                username: "john",
                password: await bcrypt.hash("123", 12)
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
                title: "Grammar",
                language: "Jawa",
                mentor: "Mr. Joko",
                duration: 30,
                userJoined: 1,
                topics: [
                    {
                        id: 1,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 2,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 3,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 4,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },

                ],
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
            {
                title: "Grammar",
                language: "Jawa",
                mentor: "Mr. Joko",
                duration: 30,
                userJoined: 1,
                topics: [
                    {
                        id: 1,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 2,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 3,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 4,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },

                ],
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
            {
                title: "Grammar",
                language: "Sunda",
                mentor: "Mr. Joko",
                duration: 30,
                userJoined: 1,
                topics: [
                    {
                        id: 1,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 2,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 3,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 4,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },

                ],
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
            {
                title: "Grammar",
                language: "Sunda",
                mentor: "Mr. Joko",
                duration: 30,
                userJoined: 1,
                topics: [
                    {
                        id: 1,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 2,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 3,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },
                    {
                        id: 4,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },

                ],
                createdAt: Date.now(),
                updatedAt: Date.now()
            },

        ])

        await Exam.deleteMany({})
        const course = await Course.findOne({ language: "Sunda" })
        await Exam.insertMany([
            {
                courseID: course._id,
                questions: [
                    {
                        id: 1,
                        question: "Alat seni sunda disebut ?",
                        answerA: "Wirahma",
                        answerB: "Wiraswara",
                        answerC: "Waditra",
                        answerD: "Aransemen",
                    },
                    {
                        id: 2,
                        question: "Jalma anu purah nembangkeun lagu dina pagelaran disebut ?",
                        answerA: "Nganggit",
                        answerB: "Rampak sekar",
                        answerC: "Wiraswara",
                        answerD: "Juru sekar",
                    },
                    {
                        id: 3,
                        question: "Pagelaran drama anu dipintonkeun disebut ?",
                        answerA: "Rampak sekar",
                        answerB: "Wirahma ",
                        answerC: "Aransemen",
                        answerD: "Gending karesmen",
                    },
                ],
                answer: [
                    {
                        id: 1,
                        answer: "C"
                    },
                    {
                        id: 2,
                        answer: "D"
                    },
                    {
                        id: 3,
                        answer: "D"
                    }
                ]
            }
        ])

        res.send("Migrate Completed")
    } catch (error) {
        next(error)
    }
})

module.exports = router