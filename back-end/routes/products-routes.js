const router = require('express').Router();
const {deleteProduct, updateProduct, createProduct, getProducts} = require('../database/products');

router.get('/', async (apiRequest, apiResponse) => {
  apiResponse.send(await getProducts());
});


router.post('/', async (apiRequest, apiResponse) => {
  const newProduct = apiRequest.body;
  await createProduct(newProduct);
  apiResponse.send({
    message: 'New product created.',
    allProducts: await getProducts(),
    thanks: true
  });
});

// endpoint to delete a product
router.delete('/:productId', async (apiRequest, apiResponse) => {
  await deleteProduct(apiRequest.params.productId);
  apiResponse.send({ message: 'Product deleted.' });
});

// endpoint to update a product
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedProduct = apiRequest.body;
  console.log({ updatedProduct})
  await updateProduct(apiRequest.params.id, updatedProduct);
  apiResponse.send({ message: 'Product updated.' });
});

module.exports = router;



