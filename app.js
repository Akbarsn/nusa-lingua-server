require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI

mongoose.connect(DB_URI, { useNewUrlParser: true }).
    then(() => {
        const app = express()

        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        app.get("/ping", (req, res) => {
            res.status(200).json({
                message:"Pong"
            })
        })

        app.listen(PORT, () => {
            console.log(`Listening to port ${PORT}`)
        })
        
    }).catch((err) => {
        console.log(`Error : \n${err}`)
    })