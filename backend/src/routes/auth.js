const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController.js");

router.get("/login", AuthController.loginUser);
router.post("/register", AuthController.registerUser);


module.exports = router;