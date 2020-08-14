const mongoose = require('mongoose')

module.exports = {
    async DBInit(DB_URI) {
        mongoose.connect(DB_URI, { useNewUrlParser: true }).
            then(() => {
                return true
            }).
            catch((err) => {
                console.log(err)
                return false
            })
    }
}