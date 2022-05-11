const { Router } = require("express");
const { hashPass, checkAccount } = require("../middleware");
const userRouter = Router();

const {
	addUser,
	listUsers,
	updateUser,
	deleteUser,
	loginUser,
} = require("./userController");

// use http verbs to send data to our user endpoint
userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", listUsers);
userRouter.patch("/movie", updateUser);
userRouter.delete("/user", deleteUser);
userRouter.post("/user/login", checkAccount, loginUser);

module.exports = userRouter;
