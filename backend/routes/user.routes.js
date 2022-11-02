import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { updateUserProfile } from '../controllers/user.controller.js';

const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/user.controller.js';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile); // protect the profile route
router.route('/').post(registerUser); // register a new user

export default router;