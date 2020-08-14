const mongoose = require('mongoose')
const schema = mongoose.Schema

const LanguageSchema = schema({
    name: String
})

module.exports = mongoose.model("Language", LanguageSchema)
