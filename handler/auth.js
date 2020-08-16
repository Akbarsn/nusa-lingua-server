require('dotenv').config()

const User = require('../model/User')
const joi = require('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { BadRequest, GeneralError, NotAcceptable } = require('../utils/errors')

const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
    async RegisterHandler(req, res, next) {
        try {
            const schema = joi.object({
                fullName: joi.string().required(),
                email: joi.string().email().required(),
                username: joi.string().alphanum().required(),
                password: joi.string().alphanum().required()
            })

            const validateReq = await schema.validateAsync(req.body)

            if (validateReq.error !== null) {
                const { fullName, username, email, password } = validateReq

                const findUsername = await User.findOne({ username: username })

                if (findUsername === null) {
                    const hashedPassword = await bcrypt.hash(password, 12)

                    if (hashedPassword) {
                        const user = new User({
                            // _id: await GetIDUser(),
                            fullName: fullName,
                            email: email,
                            username: username,
                            password: hashedPassword
                        })

                        const query = await user.save()
                        if (query) {
                            res.status(200).json(user)
                        } else {
                            throw new GeneralError("Query failed")
                        }
                    } else {
                        throw new GeneralError("Hashing failed")
                    }
                } else {
                    throw new BadRequest("Username is already used")
                }
            } else {
                throw new BadRequest("Data is not valid")
            }
        } catch (error) {
            next(error)
        }
    },
    async LoginHandler(req, res, next) {
        try {
            const schema = joi.object({
                username: joi.string().alphanum().required(),
                password: joi.string().alphanum().required()
            })

            const validateReq = await schema.validateAsync(req.body)

            if(validateReq.error !== null){
                const {username, password} = validateReq

                const user = await User.findOne({username: username})

                if(user) {
                    const checkPassword = await bcrypt.compare(password, user.password)
                    if (checkPassword) {
                        const payload = {
                            id: user._id
                        }

                        const token = jwt.sign(payload, JWT_SECRET)
                        if(token){
                            res.status(200).json({
                                message: "Login Successful",
                                user: user,
                                token: token
                            })
                        } else {
                            throw new GeneralError("Token not generated")
                        }
                    } else {
                        throw new NotAcceptable("Password is wrong")
                    }
                } else {
                    throw new NotAcceptable("Username not found")
                }
            } else {
                throw new BadRequest("Data is not valid")
            }
        } catch (error) {
            next(error)
        }
    }
}