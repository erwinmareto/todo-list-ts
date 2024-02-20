const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController.js");
const { authorization } = require("../middlewares/auth.js");

router.get("/", authorization, UserController.getAllUsers);
router.get("/:id", authorization, UserController.getUser)
router.put("/:id", authorization, UserController.updateUser)
router.delete("/:id", authorization, UserController.deleteUser)

module.exports = router;