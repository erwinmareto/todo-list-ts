const express = require("express");
const categoryRouter = require("./categories.js");
const taskRouter = require("./tasks.js");
const authRouter = require("./auth.js");
const userRouter = require("./users.js");
const { authenticate } = require("../middlewares/auth.js");

const router = express.Router();

router.use("/auth", authRouter);

// router.use(authenticate)

router.use("/categories", categoryRouter);
router.use("/tasks", taskRouter);
router.use("/users", userRouter);

module.exports = router;
