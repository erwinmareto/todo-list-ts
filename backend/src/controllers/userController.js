const UserService = require("../services/users.js");

class UserController {
  static getAllUsers = async (req, res, next) => {
    try {
      const allUsers = await UserService.getAllUsers();
      return res
        .status(200)
        .json({ message: "All Users Retrieved", data: allUsers });
    } catch (err) {
      next(err);
    }
  };

  static getUser = async (req, res, next) => {
    // const { id } = req.params;
    const {id} = req.user
    try {
      const user = await UserService.getUserById(+id);
      console.log(id);
      return res
        .status(200)
        .json({ message: "Retrieved User", data: user });
    } catch (err) {
      next(err);
    }
  };


  static updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      UserService.updateUser({ userId: +id, payload: req.body });
      return res.status(200).json({ message: "User Data Updated Successfully" });
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      UserService.deleteUser({ userId: +id });
      return res.status(200).json({ message: "User Deleted Successfully" });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserController;