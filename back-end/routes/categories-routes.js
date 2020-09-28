const router = require('express').Router();
const {deleteCategory, updateCategory, createCategory, getCategories} = require('../database/categories');

router.get('/', async (apiRequest, apiResponse) => {
  apiResponse.send(await getCategories());
});


router.post('/', async (apiRequest, apiResponse) => {
  const newCategory = apiRequest.body;
  await createCategory(newCategory);
  apiResponse.send({
    message: 'New category created.',
    allCategories: await getCategories(),
    thanks: true
  });
});

// endpoint to delete a product
router.delete('/:categoriesId', async (apiRequest, apiResponse) => {
  await deleteCategory(apiRequest.params.productId);
  apiResponse.send({ message: 'Category deleted.' });
});

// endpoint to update a product
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedCategory = apiRequest.body;
  console.log({ updatedCategory})
  await updateCategory(apiRequest.params.id, updatedCategory);
  apiResponse.send({ message: 'Category updated.' });
});

module.exports = router;



