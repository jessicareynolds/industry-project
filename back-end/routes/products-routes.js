const router = require("express").Router()
const Products = require("../models/products.model")

// read route
router.route("/").get((request, response)=> {
    Products.find().then((products)=>{
        response.json(products)
    })
})

// create route
router.route("/add").post((request,response)=>{
    // add new fields here
    const SKU = request.body.SKU,
    name= request.body.name,
    price= request.body.price,
    description= request.body.description
    const newProduct = new Products({SKU, name, price, description})


    newProduct.save().then(()=>{
        response.json("New Product Added")
    }) .catch((error)=>{
        response.status(400).json("Error " + error )
    } )
})

// update route
router.route("/update/:id").post((request,response)=>{
    Products.findById(request.params.id).then((product)=>{
        //add new fields here from schema aka products.model
        product.SKU = request.body.SKU
        product.name = request.body.name
        product.price = request.body.price
        product.description = request.body.description




        product.save().then(()=> {
            response.json("Product Updated")
        }).catch ((error) => {
            response.status(400).json ("Error " + error)
        })
    })
})


// delete route
router.route("/:id").delete((request,response)=> {
    Products.findById(request.params.id).then(() =>{
        response.json("Product has been deleted")
    }) .catch ((error) =>{
        response.status(400).json("Error " + error)
    })
})

module.exports = router