import { ProductService } from "../services/Product.service.js";

const instanceProductService = new ProductService();

const registerProduct = async (req, res) => {
  const { name, brand, quantity, price } = req.body;
  const userId = req.userId;
  const product = await instanceProductService.createProductService(
    userId,
    name,
    brand,
    quantity,
    price
  );
  res.status(201).json({ product });
};

const getUserProducts = async (req, res) => {
  const userId = req.userId;
  const products = await instanceProductService.getUserProducts(userId);
  res.json({ products });
};

const getUserProductById = async (req, res) => {
  const userId = req.userId;
  const { id } = req.query;
  const product = await instanceProductService.getUserProductById(userId, id);
  res.json({ product });
};

const getUserProductByName = async (req, res) => {
  const userId = req.userId;
  const { name } = req.query;
  const product = await instanceProductService.getUserProductByName(
    userId,
    name
  );
  res.json({ product });
};

const getUserProductByBrand = async (req, res) => {
  const userId = req.userId;
  const { brand } = req.query;
  const product = await instanceProductService.getUserProductByBrandService(
    userId,
    brand
  );
  res.json({ product });
};

const updateProduct = async (req, res) => {
  const userId = req.userId;
  const { id } = req.query;
  const { newName, newBrand, newQuantity, newPrice } = req.body;
  const product = await instanceProductService.updateProductService(
    userId,
    id,
    newName,
    newBrand,
    newQuantity,
    newPrice
  );
  res.json({ product });
};

const deleteProduct = async (req, res) => {
  const { id } = req.query;
  const userId = req.userId;

  const product = await instanceProductService.deleteProductService(userId, id);
  res.status(201).json({ product });
};

export {
  registerProduct,
  getUserProducts,
  getUserProductById,
  getUserProductByName,
  getUserProductByBrand,
  updateProduct,
  deleteProduct,
};
