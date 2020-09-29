const {getDatabase} = require('./mongo-common');

const {ObjectID} = require('mongodb');

var getUserName = require('git-user-name');
console.log(getUserName());



const collectionName = 'products';

async function createProduct(product) {
  const database = await getDatabase();
  product.addedBy = getUserName()
  const {insertedId} = await database.collection(collectionName).insertOne(product);
  return insertedId;
}

async function getProducts() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

async function deleteProduct(id) {
  const database = await getDatabase();
  await database.collection(collectionName).deleteOne({
    _id: new ObjectID(id),
  });
}

async function updateProduct(id, product) {
  const database = await getDatabase();

  
  delete product._id;
  product.updatedBy = getUserName()
  
  await database.collection(collectionName).update(
    { _id: new ObjectID(id), },
    {
      $set: {
        ...product,
      },
    },
  );
}


module.exports = {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
};
