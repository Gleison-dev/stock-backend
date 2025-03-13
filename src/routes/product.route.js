import { Router } from "express";
import {
  registerProduct,
  getUserProducts,
  getUserProductById,
  getUserProductByName,
  getUserProductByBrand,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { authMiddleware } from "../shared/middlewares/authMiddlewares/authMiddleware.js";

const productRoute = Router();

productRoute.post("/registerProduct", authMiddleware, registerProduct);
productRoute.get("/products", authMiddleware, getUserProducts);
productRoute.get("/product", authMiddleware, getUserProductById);
productRoute.get("/productByName", authMiddleware, getUserProductByName);
productRoute.get("/productByBrand", authMiddleware, getUserProductByBrand);
productRoute.put("/updateProduct", authMiddleware, updateProduct);
productRoute.delete("/deleteProduct", authMiddleware, deleteProduct);

export { productRoute };
