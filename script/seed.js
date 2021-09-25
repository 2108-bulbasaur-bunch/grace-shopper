'use strict'

const {db, models: {
  User,
  Order,
  Item,
  Product} } = require('../server/db')
const {productData, itemData, userData, orderData} = require("./seedData")

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  const orderArray = await Promise.all(
    orderData.map((order) => {
      return Order.create(order);
    })
  )

  console.log(Object.getPrototypeOf(orderArray[0]))

  const userArray = await Promise.all(
    userData.map((user) => {
      return User.create(user);
    })
  )

  const productArray = await Promise.all(
    productData.map((product) => {
      return Product.create(product);
    })
  )
  console.log(Object.getPrototypeOf(productArray[0]))


  await orderArray[0].setUser(userArray[1]);
  await orderArray[1].setUser(userArray[2]);
  await orderArray[2].setUser(userArray[4]);
  await orderArray[3].setUser(userArray[4]);
  await orderArray[4].setUser(userArray[5]);
  await orderArray[5].setUser(userArray[5]);
  await orderArray[6].setUser(userArray[6]);

  // await orderArray[0].setProducts(productArray[12]);
  // await orderArray[0].setProducts(productArray[0]);
  // await orderArray[1].setProducts(productArray[10]);
  // await orderArray[1].setProducts(productArray[18]);//items row 2
  // await orderArray[2].setProducts(productArray[1]);
  // await orderArray[2].setProducts(productArray[12]); //items row 3
  // await orderArray[3].setProducts(productArray[5]);
  // await orderArray[3].setProducts(productArray[3]); //items row 1
  // await orderArray[3].setProducts(productArray[9]);
  // await orderArray[4].setProducts(productArray[8]); //items row 4
  // await orderArray[4].setProducts(productArray[14]); //items row 5
  // await orderArray[5].setProducts(productArray[16]);
  // await orderArray[5].setProducts(productArray[17]);
  // await orderArray[5].setProducts(productArray[19]); //items row 6
  // await orderArray[6].setProducts(productArray[4]); //items row 7

  const itemArray = await Promise.all(
    itemData.map((item) => {
      return Item.create(item);
    })
  )

  console.log(`seeded successfully`)
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
