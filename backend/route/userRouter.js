const express = require("express")
const router = express.Router();
const userController = require("../controller/userController")
const userMiddleware = require("../middleware/userMiddleware")

// append api to all routes

// get users
router.get("/",userController.getUsers);
router.get("/get-user/:id",userMiddleware,userController.getUserByID);

// create user and update user
router.post("/add-user",userController.createUser);
router.put("/update-user/:id",userMiddleware,userController.updateUser);

// delete user
router.delete("/delete-user/:id",userMiddleware,userController.deleteUser);

// search user
router.get("/search",userController.searchUser)

module.exports = router;