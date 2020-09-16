const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = new Schema({
    
    name: String,
    description: String
})

const categories = mongoose.model("categories", categorySchema)
module.exports = categories