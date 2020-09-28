const {
  app,
  startDatabase
} = require('./app-common')

// endpoint to return top level api
// much like a switch statement
app.get('/', async (req, res) => {
  res.send({
    message: "You have reached the top level route of the store api"
  });
});

app.use('/products', require('./routes/products-Routes'))
app.use('/stores', require('./routes/stores-Routes'))
app.use('/categories', require('./routes/categories-Routes'))

// connect to our database
// https://www.mongodb.com/
startDatabase().then(async () => {
 
  app.listen(5000, async () => {
    console.log('Web server has started on port 5000 http://localhost:5000');
  });
});