const express = require("express")
const app = express()
const port = 5000 || process.env.PORT
const productsRouter = require("./routes/products-routes")

app.use("/",productsRouter)

app.listen(port,()=>{
    console.log(`server running on port : ${port}`)
})