const {
	models: { User },
} = require("../db");

const isLoggedIn = async (req, res, next) => {
	try {
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

//isSameUser



//isSameUserOrAdmin -- just for the user detail view scenario(or if ever you needed an admin and the same user to see something)




module.exports = {
	isLoggedIn,
	isAdmin,
};
