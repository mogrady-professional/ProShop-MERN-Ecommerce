import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} from '../controllers/product.controller.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct)
  .put(protect, isAdmin, updateProduct);
router.post('/:id/reviews', protect, createProductReview);

export default router;
