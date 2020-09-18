const router = require("express").Router()
const Stores = require("../models/stores.model")

// read route
router.route("/").get((request, response)=> {
    Stores.find().then((stores)=>{
        response.json(stores)
    })
})

// create route
router.route("/add").post((request,response)=>{
    // add new fields here
    
    name= request.body.name,
    description= request.body.description
    const newStore = {
        name,description
    } 


    newStore.save().then(()=>{
        response.json("New Store Added")
    }) .catch((error)=>{
        response.status(400).json("Error " + error )
    } )
})

// update route
router.route("/update/:id").post((request,response)=>{
    Stores.findById(request.params.id).then((store)=>{
        //add new fields here from schema aka products.model
        
        store.name = request.body.name
        store.description = request.body.description




        store.save().then(()=> {
            response.json("Store Updated")
        }).catch ((error) => {
            response.status(400).json ("Error " + error)
        })
    })
})


// delete route
router.route("/:id").delete((request,response)=> {
    Stores.findById(request.params.id).then(() =>{
        response.json("Store has been deleted")
    }) .catch ((error) =>{
        response.status(400).json("Error " + error)
    })
})

module.exports = router