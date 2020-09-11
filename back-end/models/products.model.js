const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    SKU: String,
    name: String,
    price: Number,
    description: String
})

const products = mongoose.model("products", productSchema)
module.exports = products