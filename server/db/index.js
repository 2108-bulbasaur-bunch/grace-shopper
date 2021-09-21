//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Order = require('./models/Order')
const Cart = require('./models/Cart')

//associations could go here!

User.hasMany(Order);
Order.belongsTo(User);

Product.belongsToMany(Order, { through: 'Cart' })
Order.belongsToMany(Product, { through: 'Cart' })

module.exports = {
  db,
  models: {
    User,
    Order,
    Cart
  },
}
