const User = require("./userModel");

exports.addUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(200).send({ user: newUser.username });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};

exports.listUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).send({ users });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};

exports.deleteUser = async (req, res) => {
	try {
		const delUser = await User.deleteOne({ username: req.body.username });
		res.status(200).send({ delUser });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};
