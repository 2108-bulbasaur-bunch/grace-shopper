const {
	models: { User },
} = require("../db");

const isLoggedIn = async (req, res, next) => {
	try {
		const user = await User.findByToken(req.header.authorization);
		if (user) {
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
