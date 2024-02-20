const TaskService = require("../services/tasks.js");

class taskController {
  static getAllTasks = async (req, res, next) => {
    try {
      const allTasks = await TaskService.getAllTasks();
      //   console.log(allTasks);
      return res
        .status(200)
        .json({ message: "All Tasks Retrieved", data: allTasks });
    } catch (err) {
      next(err);
    }
  };

  static getTask = async (req, res, next) => {
    const { id } = req.params;
    try {
      const task = await TaskService.getOneTask({ taskId: +id });
      console.log(id);
      return res
        .status(200)
        .json({ message: "Retrieved Task Successfully", data: task });
    } catch (err) {
      next(err);
    }
  };

  static addTask = async (req, res, next) => {
    try {
      TaskService.createTask({ payload: req.body });
      return res.status(201).json({ message: "Task Created Successfully" });
    } catch (err) {
      next(err);
    }
  };

  static updateTask = async (req, res, next) => {
    try {
      const { id } = req.params;
      TaskService.updateTask({ taskId: +id, payload: req.body });
      return res.status(200).json({ message: "Task Updated Successfully" });
    } catch (err) {
      next(err);
    }
  };

  static deleteTask = async (req, res, next) => {
    try {
      const { id } = req.params;
      TaskService.deleteTask({ taskId: +id });
      return res.status(200).json({ message: "Task Deleted Successfully" });
    } catch (err) {
      next(err);
    }
  };

  static getEverything = async (req, res, next) => {
    try {
      const {id} = req.params;
      // const {id} = req.user
      const tasks = await TaskService.getEverythingById(+id)
      return res.status(200).json({message: 'Task Retrieved Successfully', data:tasks})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = taskController;
