const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/categoryController.js");

router.get("/", CategoryController.getAllcategories);
router.get("/:id", CategoryController.getCategory)
router.post("/", CategoryController.addCategory)
router.put("/:id", CategoryController.updateCategory)
router.delete("/:id", CategoryController.deleteCategory)

module.exports = router;