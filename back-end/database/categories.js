const {getDatabase} = require('./mongo-common');

const {ObjectID} = require('mongodb');

var getUserName = require('git-user-name');
console.log(getUserName());


const collectionName = 'categories';

async function createCategory(categories) {
  const database = await getDatabase();
  category.addedBy = getUserName()
 
  const {insertedId} = await database.collection(collectionName).insertOne(categories);
  return insertedId;
}

async function getCategories() {
  const database = await getDatabase();
  
  return await database.collection(collectionName).find({}).toArray();
}

async function deleteCategories(id) {
  const database = await getDatabase();
 
  
  await database.collection(collectionName).deleteOne({
    _id: new ObjectID(id),
  });
}

async function updateCategory(id, category) {
  const database = await getDatabase();

  
  delete category._id;
  category.updatedBy = getUserName()
  
  await database.collection(collectionName).update(
    { _id: new ObjectID(id), },
    {
      $set: {
        ...category,
      },
    },
  );
}

// export the functions that can be used by the main app code
module.exports = {
  createCategory,
  getCategories,
  deleteCategories,
  updateCategory,
};