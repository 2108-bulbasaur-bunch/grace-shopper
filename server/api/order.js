const router = require("express").Router();
const {
  models: { Order }
} = require("../db")

module.exports = router;


// CUSTOMERS

// GET all orders
// api/orders/userId

// GET current cart - incomplete order
// api/orders/cart/userId/

// PUT checkout cart - change to completed
// api/orders/userId/

// POST create a new cart if none are associated w/ the user
// api/orders/userId

// GET order details of previous order - also confirmation page
// api/orders/history/userId

// POST add item to cart
// api/orders/cart/userId

// PUT edit quantity of an item in cart
// api/orders/cart/userId

// DELETE remove item from cart
// api/orders/cart/userId



// ADMIN

// GET all orders
// api/orders

// GET one user's order history - complete: true
// api/orders/userId


