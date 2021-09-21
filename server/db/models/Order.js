const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    validate: {
      notEmpty: true
    }
  },

  purchaseDate: {
    type: Sequelize.DATE,
    allowNull: false
  },

  totalPrice: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.00,
    allowNull: false
  }
})

module.exports = Order;
