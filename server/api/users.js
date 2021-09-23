const router = require("express").Router();
const {
	models: { User },
} = require("../db");
const { isLoggedIn, isAdmin } = require("./adminFunc");

//Get: user listing page for admin only
//+  need to check if it is admin first
router.get("/", isLoggedIn, isAdmin, async (req, res, next) => {
	try {
		const users = await User.findAll({
			// explicitly select only the id and username fields - even though
			// users' passwords are encrypted, it won't help if we just
			// send everything to anyone who asks!
			attributes: ["id", "firstName", "lastName", "email"],
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
//GET All single user's orders - purchase history
// /:userId/orders
