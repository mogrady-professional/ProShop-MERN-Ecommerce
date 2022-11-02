import express from 'express';
const router = express.Router();
import {
  addOrder,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from '../controllers/order.controller.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

router.post('/', protect, addOrder);
router.get('/', protect, isAdmin, getOrders);
router.get('/myOrders', protect, getMyOrders);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/deliver', protect, isAdmin, updateOrderToDelivered);

export default router;
