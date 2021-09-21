const router = require("express").Router();
const { restart } = require("nodemon");
const {
	models: { Product },
} = require("../db");
const { isLoggedIn, isAdmin } = require("./adminFunc");

module.exports = router;

//GET All products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    next(error)
  }
})


//GET Single product
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.send(product);
  } catch (error) {
    next(error)
  }
})


//POST Add new product - admin only
router.post('/', isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.send(newProduct);
  } catch (error) {
    next(error)
  }
})


//PUT Edit product - admin only
router.put('/:productId', isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.send(await product.update(req.body));
  } catch (error) {
    next(error)
  }
})


//DELETE Delete product - admin only
router.delete('/:productId', isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    await product.destroy();
    res.send(product);
  } catch (error) {
    next(error)
  }
})
