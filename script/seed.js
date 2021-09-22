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

  const productArray = await Promise.all(
    productData.map((product) => {
      return Product.create(product);
    })
  )
  const itemArray = await Promise.all(
    itemData.map((item) => {
      return Item.create(item);
    })
  )
  const userArray = await Promise.all(
    userData.map((user) => {
      return User.create(user);
    })
  )
  const orderArray = await Promise.all(
    orderData.map((order) => {
      return Order.create(order);
    })
  )
  // const users = await Promise.all([
  //   User.create({ username: 'cody', password: '123' }),
  //   User.create({ username: 'murphy', password: '123' }),
  // ])
  console.log(`seeded successfully`)

  return productArray, itemArray, userArray, orderArray
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
