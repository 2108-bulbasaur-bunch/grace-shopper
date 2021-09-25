const router = require("express").Router();
const {
    models: { Order },
} = require("../db");

const Item = require("../db/models/Item");

const { isLoggedIn, isAdmin } = require("./adminFunc");

module.exports = router;

// CUSTOMERS

// GET all orders
// api/orders/userId
router.get("/:userId", isLoggedIn, async (req, res, next) => {
    try {
        const userOrders = await Order.findAll({
            where: {
                userId: req.params.userId,
            },
        });
      res.send(userOrders);
    } catch (error) {
        next(error);
    }
});

// GET current cart - incomplete order
// api/orders/cart/userId/
router.get("/:userId", isLoggedIn, async (req, res, next) => {
    try {
        const cart = await Order.findAll({
            where: {
                userId: req.params.userId,
                completed: true,
          },
          include: [
            {
              model: Item
            }
          ]
        });
      res.send(cart);
    } catch (error) {
        next(error);
    }
});

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

router.get('/', isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const allOrders = await Order.findAll();
    res.send(allOrders);
  } catch (error) {
    next(error)
  }
})

// GET one user's order history - complete: true
// api/orders/userId
router.get('/:userId', isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const userOrders = await Order.findAll({
      where: {
        userId: req.params.userId,
        completed: true
      }
    })
    res.send(userOrders);
  } catch (error) {
    next(error)
  }
})
