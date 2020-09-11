const router = require("express").Router()
const products = require("../models/products.model")

// read route
router.route("/").get((request, response)=> {
    response.send("Hello World")
})

// create route
router.route("/add")

// update route


// delete route


module.exports = router