const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// get request to get all users
router.get("/", userController.getAllUsers);

// post request to create a new user
router.post("/", userController.createUser);

// put request to update a user
router.put("/:id", userController.updateUser);


// delete request to delete a user
router.delete("/:id", userController.deleteUser);



module.exports = router;