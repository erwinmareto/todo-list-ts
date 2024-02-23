const CategoryService = require("../services/categories.js");

class CategoryController {
  static getAllcategories = async (req, res, next) => {
    try {
      const allCategories = await CategoryService.getAllCategories();
      return res
        .status(200)
        .json({ message: "All Categories Retrieved", data: allCategories });
    } catch (err) {
      next(err);
    }
  };

  static getCategory = async (req, res, next) => {
    const { id } = req.params;
    try {
      const category = await CategoryService.getOneCategory({
        categoryId: +id,
      });
      console.log(id);
      return res
        .status(200)
        .json({ message: "Retrieved Category Successfully", data: category });
    } catch (err) {
      next(err);
    }
  };

  static getCategoriesByUserId = async (req, res, next) => {
    const { userId } = req.params;
    try {
      const categories = await CategoryService.getCategoriesByUserId(userId);
      return res
        .status(200)
        .json({ message: "Retrieved Category Successfully", data: categories });
    } catch (error) {
      next(error);
    }
  };

  static addCategory = async (req, res, next) => {
    try {
      const { userId, title } = req.body;
      await CategoryService.createCategory(req.body);
      return res.status(201).json({ message: "Category Created Successfully" });
    } catch (err) {
      next(err);
    }
  };

  static updateCategory = async (req, res, next) => {
    try {
      const { id } = req.params;
      CategoryService.updateCategory({ categoryId: +id, payload: req.body });
      return res.status(200).json({ message: "Category Updated Successfully" });
    } catch (err) {
      next(err);
    }
  };

  static deleteCategory = async (req, res, next) => {
    try {
      const { id } = req.params;
      CategoryService.deleteCategory({ categoryId: +id });
      return res.status(200).json({ message: "Category Deleted Successfully" });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = CategoryController;
