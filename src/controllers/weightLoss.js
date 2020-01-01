import Controller from "./Controller";
import UserService from "./../services/userService";
import User from "./../models/users/model";

const userService = new UserService(User);

class UserController extends Controller {
  constructor(service) {
    super(service);
  }

  async add (req, res) {
    const user = new User({
      ...req.body
    });

    try {
      const savedUser = await user.save({_id: "5e0c72b55e143e197bde99aa"});
      res.json(savedUser);
    } catch (err) {
      res.json({
        error: true,
        message: err
      });
    }
  };

  async get (req, res) {
    const {username} = req.body;

    try {
      const users = await User.find({username: username});
      res.json(users);
    } catch (err) {
      res.json({
        error: true,
        message: err
      });
    }
  }
}

export default new UserController(userService);
