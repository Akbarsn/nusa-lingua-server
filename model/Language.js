const mongoose = require('mongoose')

const LanguageSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model("Language", LanguageSchema)
