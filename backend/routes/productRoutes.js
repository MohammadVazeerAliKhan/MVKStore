import express from "express";
const router = express.Router();
// import products from "../data/products.js";
// import Product from "../models/productModel.js";
// import asyncHandler from "../middelware/asyncHandler.js";
import { protect, admin } from "../middelware/authMiddleware.js";

import checkObjectId from "../middelware/checkObjectId.js";

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);

router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, checkObjectId, deleteProduct);

router.route("/:id/reviews").post(protect, checkObjectId, createProductReview);

export default router;
