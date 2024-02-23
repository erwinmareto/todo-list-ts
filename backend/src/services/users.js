const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class UserService {
  static getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
  };

  static getUserById = async (id) => {
    const user = await prisma.user.findUnique({
      where: {
        id: +id,
      },
    });
    if (!user) {
      throw { name: "NotFound" };
    }
    return user;
  };

  static updateUser = async ({ userId, payload }) => {
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const user = await prisma.user.update({
      where: { id: +userId },
      data: {
        username: payload.username,
        password: hashedPassword,
      },
    });
    if (!user) {
      throw { name: "NotFound" };
    }
    return user;
  };

  static deleteUser = async ({ userId }) => {
    const user = await prisma.user.delete({
      where: { id: +userId },
    });
    if (!user) {
      throw { name: "NotFound" };
    }
  };

  static getEverything = async ({ userId }) => {
    const userTasks = await prisma.user.findUnique({
      where: {
        id: +userId,
      },
      select: {
        Category: {
          select: {
            title: true,
            Task: true,
          },
        },
      },
    });
    if (!userTasks) {
      throw { name: "NotFound" };
    }
    return userTasks;
  };
}

module.exports = UserService;
