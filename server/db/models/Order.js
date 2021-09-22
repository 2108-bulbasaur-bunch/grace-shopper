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
})

module.exports = Order;
