const express = require("express")
const app = express()
const port = 5000 || process.env.PORT
const productsRouter = require("./routes/products-routes")
const mongoose = require("mongoose")
const mongoUrl = "mongodb://mlab2020:abc123def!@ds031617.mlab.com:31617/learningmongo"

// connects mongoose to database
mongoose.connect(mongoUrl,{ useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb database connection established successfully");
})


app.use("/",productsRouter)
app.use(express.json())

app.listen(port,()=>{
    console.log(`server running on port : ${port}`)
})