import { Router } from "express";
import { logout } from "../controllers/auth.controller.js";
import { authMiddleware } from "../shared/middlewares/authMiddlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/logout", authMiddleware, logout);

export { authRouter };
