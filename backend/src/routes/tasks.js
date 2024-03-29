const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController.js");

router.get("/:id", taskController.getEverything)
router.get("/", taskController.getAllTasks);
// router.get("/:id", taskController.getTask)
router.post("/", taskController.addTask)
router.put("/:id", taskController.updateTask)
router.delete("/:id", taskController.deleteTask)

module.exports = router;
