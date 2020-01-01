import Controller from "./Controller";
import UserService from "./../services/userService";
import User from "./../models/users/model";

const userService = new UserService(User);

class UserController extends Controller {
  constructor(service) {
    super(service);
  }

  async post (req, res) {
    console.log(req.body);
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });

    try {
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (err) {
      res.json({
        error: true,
        message: err
      });
    }
  };
}

export default new UserController(userService);
