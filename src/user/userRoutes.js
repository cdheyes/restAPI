const { Router } = require("express");
const { hashPass } = require("../middleware");
const userRouter = Router();

const { addUser, listUsers, deleteUser } = require("./userController");

// use http verb post to add data to our movie endpoint
userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", listUsers);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;
