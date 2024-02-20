const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class CategoryService {
  static getAllCategories = async () => {
    const categories = await prisma.category.findMany();
    return categories;
  };

  static getOneCategory = async ({ categoryId }) => {
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });
    if (!category) {
      throw { name: "NotFound" };
    }
    return category;
  };

  static createCategory = async ({ userId, title }) => {
    await prisma.category.create({
      data: {
        userId: parseInt(userId),
        title: title,
      },
    });
  };

  static updateCategory = async ({ categoryId, payload }) => {
    const user = await prisma.category.update({
      where: { id: categoryId },
      data: {
        userId: payload.userId,
        title: payload.title,
      },
    });
    if (!user) {
      throw { name: "NotFound" };
    }
    return user;
  };

  static deleteCategory = async ({ categoryId }) => {
    const user = await prisma.category.delete({
      where: { id: categoryId },
    });
    if (!user) {
      throw { name: "NotFound" };
    }
  };
}

module.exports = CategoryService;
