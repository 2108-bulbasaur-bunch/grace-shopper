// const router = require("express").Router();
// const {
// 	models: { Item },
// } = require("../db");
// const Order = require("../db/models/Order");
// const Product = require("../db/models/Product");
// const { isLoggedIn, isAdmin } = require("./adminFunc");


// module.exports = router;


// // GET all products in the current cart for logged in user
// // api/items/userid
// router.get('/:orderId', isLoggedIn, async (req, res, next) => {
//   try {
//     const cart = await Order.findOne({
//       where: {
//         orderId: req.params.orderId,
//         completed: false
//       },
//       include: [
//         {
//           model: Item
//         }
//       ]
//     })
//     res.send(cart)
//   } catch (error) {
//     next(error)
//   }
// })


// // POST add product to cart
// router.post('/:userId', isLoggedIn, async (req, res, next) => {

//   // const {
//   //   productId
//   // } = req.body

//   try {
//     const cart = await Order.findOne({
//       where: {
//         userId: req.params.userId,
//         completed: false
//       },
//       include: [
//         {
//           model: Item
//         }
//       ]
//     })

//     } catch (error) {
//     next (error)
//   }
// })


// // PUT edit quantity of products in cart


// // DELETE remove product from cart
