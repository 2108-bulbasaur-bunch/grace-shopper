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
		return true;
	}
};

const isSameUser = (req, res, next) => {
	try {
		//the plus sign below is forcing the type to number
		if(+req.params.userId !== req.user.id){
			res.status(403).send("You do not have access to this information")
		} else {
			next();
			return true;
		}

	} catch (error) {
		next(error);
	}
};

const isSameUserOrAdmin = (req, res, next) => {
	if(+req.params.userId !== req.user.id){
		if (!req.user.isAdmin) {
			res.status(403).send("Admin only");
		} else{
				next();
		}
	} else {
		next();
	}
}



module.exports = {
	isLoggedIn,
	isAdmin,
	isSameUser,
	isSameUserOrAdmin
};
