require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI

mongoose.connect(DB_URI, { useNewUrlParser: true }).
then(() => {
    const app = express()
    const router = require('./router')
    const { handleErrors, handleNotFound } = require('./middleware/ErrorHandler')
    const prep = require('./prep')
    const cors = require('cors')
    
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.options('*', cors())
    app.use(cors())
    
    app.use("/static", express.static("/public"))
    
    
    app.use(prep)
    app.use(router)

        app.use(handleErrors)
        app.use(handleNotFound)

        app.listen(PORT, () => {
            console.log(`Listening to port ${PORT}`)
        })

    }).catch((err) => {
        console.log(`Error : \n${err}`)
    })