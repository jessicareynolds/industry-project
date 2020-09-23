const express = require("express")
const app = express()
const port = 5000 || process.env.PORT
const productsRouter = require("./routes/products-routes")
const storesRouter = require("./routes/stores-routes")
const categoriesRouter = require("./routes/categories-routes")
const mongoose = require("mongoose")
const mongoUrl = "mongodb+srv://admin:RURVoDxjkFsQto7A@cluster0.0apnz.mongodb.net/IndustryProject"
const cors = require("cors")

const {MongoClient} = require('mongodb');

let database = null;

async function startDatabase() {
  const mongoDBURL = "mongodb+srv://admin:RURVoDxjkFsQto7A@cluster0.0apnz.mongodb.net/IndustryProject";
  const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: true});
  database = connection.db();
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

// connects mongoose to database
mongoose.connect(mongoUrl,{ useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
console.log("Mongodb database connection established successfully");
})

//set up additional  fields
app.use(express.json())
app.use(cors)
app.use("/Products",productsRouter)
app.use("/Stores",storesRouter)
app.use("/Categories",categoriesRouter)


app.listen(port,()=>{
    console.log(`server running on port : ${port}`)
})

module.exports = {
    getDatabase,
    startDatabase,
  };