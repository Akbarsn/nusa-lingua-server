require('dotenv').config()

const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI

const express = require('express')
const cors = require('cors')
const { handleErrors, handleNotFound } = require('./middleware/ErrorHandler')
const router = require('./router')
const prep = require('./prep')
const {DBInit} = require('./database')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/static', express.static('./public'))

app.options('*', cors())
app.use(cors())


console.log(DBInit(DB_URI) ? "DB Connected":"DB Failed")

app.use(prep)
app.use(router)

app.use(handleErrors)
app.use(handleNotFound)

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})

