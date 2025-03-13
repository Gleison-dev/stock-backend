import { Router } from "express";
import { productRoute } from "./product.route.js";
import { userRouter } from "./user.route.js";
import { authRouter } from "./auth.route.js";

// CRIANDO ROTA INDEX
const router = Router();

// ROTA INDEX USANDO A ROTA DE PRODUTO
router.use(productRoute);
router.use(userRouter);
router.use(authRouter);

export { router };
