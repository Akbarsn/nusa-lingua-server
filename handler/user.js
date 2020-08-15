const User = require('../model/User')
const { BadRequest } = require('../utils/errors')

module.exports = {
    async GetProfile (req,res,next){
        const userID = req.user.id

        try {
            const user = await User.findById(userID)

            if(user){
                res.status(200).json(user)
            } else {
                throw new BadRequest("User did not found")
            }
        } catch (error) {
            next(error)
        }
    }
}