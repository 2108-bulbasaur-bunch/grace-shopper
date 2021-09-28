const router = require("express").Router();
const {
  models: { Order, Item },
} = require("../db");
const Product = require("../db/models/Product");

const { isLoggedIn, isAdmin, isSameUserOrAdmin } = require("./adminFunc");

// GET all orders
// api/orders
router.get("/", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const allOrders = await Order.findAll();
    res.json(allOrders);
  } catch (error) {
    next(error);
  }
});

// GET one user's order history - complete: true
// api/orders/userId
//Needs to have "isLoggedIn" to technically be secure, but don't want the bad token issue to delay dev:  isLoggedIn,
<<<<<<< HEAD
// router.get("/:userId", async (req, res, next) => {
// 	try {
// 		const userOrders = await Order.findOne({
=======
//Removed "true" so it shows everything
// router.get("/:userId", async (req, res, next) => {
// 	try {
// 		const userOrders = await Order.findAll({
>>>>>>> 7f628c6f95063572919f12757884b1a2a19bbd96
// 			where: {
// 				userId: req.params.userId,
// 				completed: true,
// 			},
// 		});
// 		res.send(userOrders);
// 	} catch (error) {
// 		next(error);
// 	}
// });

router.get("/:userId", isLoggedIn, isSameUserOrAdmin, async (req, res, next) => {
  try {
    const userOrders = await Order.findAll({
      where: {
        userId: req.params.userId,
        completed: true,
      },
      include: [{
        model: Product
      }]
    });
    res.send(userOrders);
  } catch (error) {
    next(error);
  }
});

// CUSTOMERS

// GET current cart - incomplete order
// api/orders/cart/userId/
router.get("/cart/:userId", isLoggedIn, async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.userId,
        completed: false,
      },
    });
    const cart = await Item.findAll({
      where: {
        orderId: order.id,
      },
    });
    res.send(cart);
  } catch (error) {
    next(error);
  }
});


// PUT checkout cart - change to completed
// api/orders/cart/userId/

router.put("/:userId", async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        completed: false,
      },
    });
		// let date = new Date(Date.now())
		// await userOrder.update({
		// 	completed: true,
		// 	// purchaseDate: date
		// })
		// await userOrder.save();
    res.send(await userOrder.update({
			completed: true,
		}));
  } catch (error) {
    next(error);
  }
});

// POST create a new cart if none are associated w/ the user
// api/orders/userId

// router.post("/:userId", async (req, res, next) => {
// 	try {
// 		const newCart = await Order.create({
// 			completed: false,
// 			purchaseDate: new Date(),
// 			userId: req.params.userId,
// 		});
// 		res.send(newCart);
// 	} catch (err) {
// 		next(err);
// 	}
// });

// GET order details of previous order - also confirmation page
// api/orders/history/userId
//INSTEAD OF ROUTE, USE LOCAL STATE/PROPS TO PASS CART INFORMATION TO THE CONFIRMATION PAGE


// POST add items to cart
// api/orders/cart/userId
router.post("/cart/:userId", async (req, res, next) => {
  try {
    let userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        completed: false,
      },
    });
   console.log('userOrder-before',userOrder)
    if (!userOrder) {
      userOrder = await Order.create({
        completed: false,
        purchaseDate: new Date(),
        userId: req.params.userId,
      });
    }
       console.log('userOrder-after',userOrder)

		//for loop
		const items = []
		req.body.forEach(async element => {
			 items.push(await Item.create({
				quantity: element.quantity,
				purchasePrice: element.purchasePrice,
				orderId: userOrder.id,
				productId: element.productId,
			}));
		});
    // const newItem = await Item.create({
    //   quantity: req.body.quantity,
    //   purchasePrice: req.body.purchasePrice,
    //   orderId: userOrder.id,
    //   productId: req.body.productId,
    // });
    res.status(201).send(items);
  } catch (err) {
    next(err);
  }
});

// PUT edit quantity of an item in cart
// api/orders/cart/userId

router.put("/cart/:userId", async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        completed: false,
      },
    });

    const product = await Item.findOne({
      where: {
        productId: req.body.productId,
        orderId: userOrder.id,
      },
    });
    res.send(
      await product.update({
        quantity: req.body.quantity,
        purchasePrice: req.body.purchasePrice,
      })
    );
  } catch (err) {
    next(err);
  }
});

// DELETE remove item from cart
// api/orders/cart/userId

router.delete("/cart/:userId", async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        completed: false,
      },
    });
    const product = await Item.findOne({
      where: {
        productId: req.body.productId,
        orderId: userOrder.id,
      },
    });
    await product.destroy();
    res.send(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
