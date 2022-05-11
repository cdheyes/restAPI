const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

exports.hashPass = async (req, res, next) => {
	try {
		req.body.pass = await bcrypt.hash(req.body.pass, 8);
		next();
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};

exports.checkAccount = async (req, res, next) => {
	try {
		let user = await User.findOne({ username: req.body.username });
		if (user === null) {
			res.status(500).send({ message: "User not found!" });
		} else {
			if (await bcrypt.compare(req.body.pass, user.pass)) {
				// console.log("Correct password");
				next();
			} else {
				res.status(500).send({ message: "Incorrect password" });
			}
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};
