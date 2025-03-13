import { Router } from "express";
import {
  registerUser,
  loginUser,
  getUsername,
  getAllUsersService,
  deleteUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../shared/middlewares/authMiddlewares/authMiddleware.js";

const userRouter = Router();

userRouter.post("/registerUser", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/username", authMiddleware, getUsername);
userRouter.get("/users", getAllUsersService);
userRouter.delete("/deleteUser", deleteUser);

export { userRouter };
