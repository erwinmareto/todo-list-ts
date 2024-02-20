const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class TaskService {
  static getAllTasks = async () => {
    const tasks = await prisma.task.findMany();
    return tasks;
  };

  static getOneTask = async ({ taskId }) => {
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });
    if (!task) {
      throw { name: "NotFound" };
    }
    return task;
  };

  static createTask = async ({ payload }) => {
    await prisma.task.create({
      data: {
        categoryId: payload.categoryId,
        title: payload.title,
        status: payload.status,
        priority: payload.priority,
        dueTime: payload.dueTime,
      },
    });
  };

  static updateTask = async ({ taskId, payload }) => {
    const task = await prisma.task.update({
      where: { id: taskId },
      data: {
        categoryId: payload.categoryId,
        title: payload.title,
        status: payload.status,
        priority: payload.priority,
        dueTime: payload.dueTime,
      },
    });
    if (!task) {
      throw { name: "NotFound" };
    }
    return task;
  };

  static deleteTask = async ({ taskId }) => {
    const task = await prisma.task.delete({
      where: { id: taskId },
    });
    if (!task) {
      throw { name: "NotFound" };
    }
    return task;
  };

  static getEverythingById = async (id) => {
    const userTasks = await prisma.category.findUnique({
      where: {
        id: id,
      },
      select: {
        title: true,
        Task: true,
      },
    });
    if (!userTasks) {
      throw { name: "NotFound" };
    }
    return userTasks;
  };
}

module.exports = TaskService;
