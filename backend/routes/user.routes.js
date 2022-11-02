import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/user.controller.js';

router.route('/').post(registerUser).get(protect, isAdmin, getUsers);

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile); // protect the profile route
router
  .route('/:id')
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, updateUser);
export default router;
