const Sequelize = require('sequelize');
const db = require('../db');

const Item = db.define('item', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  purchasePrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})


module.exports = Item;
