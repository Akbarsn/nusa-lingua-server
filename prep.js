const router = require('express').Router()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('./model/User')
const Language = require('./model/Language')
const Course = require('./model/Course')

router.get('/test', async (req, res) => {
    const course = await Course.findOne({})

    const c = await Course.findOne({_id: mongoose.Types.ObjectId("5f373a781bb01033c1d835d4")})
    res.status(200).json({
        id: course._id,
        data: typeof course._id,
        type: mongoose.Types.ObjectId("5f373a781bb01033c1d835d4"),
        isFound: course._id == mongoose.Types.ObjectId("5f373a781bb01033c1d835d4"),
        c
    })
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
            // {
            //     fullName: "Ucup",
            //     email: "yusuf@gmail.com",
            //     username: "yusuf",
            //     password: "123"
            // },
            // {
            //     fullName: "Safira",
            //     email: "safira@gmail.com",
            //     username: "safira",
            //     password: "123"
            // },
            // {
            //     fullName: "Sasi",
            //     email: "sasi@gmail.com",
            //     username: "sasi",
            //     password: "123"
            // },
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
                        id:4,
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
                        id:4,
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
                        id:4,
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
                        id:4,
                        title: "Test One",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        videoURI: "https://www.youtube.com/embed/0jZNKV5ROBM"
                    },

                ],
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
            
        ])

        res.send("Migrate Completed")

    } catch (error) {
        next(error)
    }
})

module.exports = router