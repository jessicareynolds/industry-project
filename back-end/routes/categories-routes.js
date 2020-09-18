const router = require("express").Router()
const Categories = require("../models/categories.model")

// read route
router.route("/").get((request, response)=> {
    Categories.find().then((categories)=>{
        response.json(categories)
    })
})

// create route
router.route("/add").post((request,response)=>{
    // add new fields here
    
    const name= request.body.name,
    description= request.body.description
    const newCategory = {
        name,description
    } 


    newCategory.save().then(()=>{
        response.json("New Category Added")
    }) .catch((error)=>{
        response.status(400).json("Error " + error )
    } )
})

// update route
router.route("/update/:id").post((request,response)=>{
    Categories.findById(request.params.id).then((category)=>{
        //add new fields here from schema aka products.model
        
        category.name = request.body.name
        category.description = request.body.description




        category.save().then(()=> {
            response.json("Category Updated")
        }).catch ((error) => {
            response.status(400).json ("Error " + error)
        })
    })
})


// delete route
router.route("/:id").delete((request,response)=> {
    Categories.findById(request.params.id).then(() =>{
        response.json("Category has been deleted")
    }) .catch ((error) =>{
        response.status(400).json("Error " + error)
    })
})

module.exports = router