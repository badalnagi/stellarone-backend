import express from 'express';
import { authUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

// Signup
router.post('/register', registerUser);

// Login
router.post('/login', authUser);

export default router;
