import { UserService } from "../services/user.service.js";

const istanceUserService = new UserService();

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await istanceUserService.registerUserService(username, password);
  res.status(201).json({ user });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const token = await istanceUserService.loginUser(username, password);
  res.status(201).json({ token });
};

const getUsername = async (req, res) => {
  const userId = req.userId;
  const user = await istanceUserService.getUsernameService(userId);
  res.json({ user });
};

const getAllUsersService = async (req, res) => {
  const users = await istanceUserService.getAllUsersService();
  res.status(200).json({ users });
};

const deleteUser = async (req, res) => {
  const { id } = req.query;
  const user = await istanceUserService.deleteUserService(id);
  res.json({ user });
};

export { registerUser, loginUser, getUsername, getAllUsersService, deleteUser };
