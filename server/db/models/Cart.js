const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },

  price: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      allowNull: false
    }
  },

  totalPrice: {
    type: Sequelize.DECIMAL(10, 2)
  }
})


module.exports = Cart;
