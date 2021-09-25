const Sequelize = require('sequelize');
const db = require('../db')

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "https://live.staticflickr.com/7215/6904795572_7d46f1e1e2_b.jpg",
    validate: {
      isUrl: true,
      notEmpty: true,
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Product;
