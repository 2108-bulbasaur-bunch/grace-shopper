//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Order = require('./models/Order')
const Product = require('./models/Product')
const Item = require('./models/Item')

//associations could go here!

User.hasMany(Order);
Order.belongsTo(User);

Product.belongsToMany(Order, { through: Item })
Order.belongsToMany(Product, { through: Item })

module.exports = {
  db,
  models: {
    User,
    Order,
    Item,
    Product
  },
}
