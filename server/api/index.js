const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/products", require("./product"));
router.use("/orders", require("./order"));
// router.use('/items', require('./item'))

router.use((req, res, next) => {
	const error = new Error("API Route Not Found");
	error.status = 404;
	next(error);
});

module.exports = router;
