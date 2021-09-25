const {
	models: { User },
} = require("../db");

const isLoggedIn = async (req, res, next) => {
	try {
		console.log("this is the req", req.headers)
		req.user = await User.findByToken(req.headers.authorization);
		if (req.user) {
			next();
		}
	} catch (error) {
		next(error);
	}
};

const isAdmin = (req, res, next) => {
	if (!req.user.isAdmin) {
		res.status(403).send("Admin only");
	} else {
		next();
	}
};

module.exports = {
	isLoggedIn,
	isAdmin,
};
