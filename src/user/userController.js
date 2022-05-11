const User = require("./userModel");
const bcrypt = require("bcryptjs");

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

exports.updateUser = async (req, res) => {
	try {
		const user = await User.findOneAndUpdate(
			{ username: req.body.usename },
			{ $set: { email: req.body.email } }
		);
		res.status(200).send({ user });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};

exports.deleteUser = async (req, res) => {
	try {
		const user = await User.deleteOne({ username: req.body.username });
		res.status(200).send({ user });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};

exports.loginUser = async (req, res) => {
	let user = req.body.username;
	try {
		res.status(200).send({ user });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};
