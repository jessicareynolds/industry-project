const mongoose = require("mongoose")
const Schema = mongoose.Schema

const storeSchema = new Schema({
    logo: String,
    name: String,
    description: String
})

const stores = mongoose.model("stores", storeSchema)
module.exports = stores