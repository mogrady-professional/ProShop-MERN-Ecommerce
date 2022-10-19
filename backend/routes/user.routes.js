import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/user.controller.js';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.route('/login').post(authUser);

export default router;
