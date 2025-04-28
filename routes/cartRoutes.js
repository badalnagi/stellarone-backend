import express from 'express';
import { addToCart, getCart, removeFromCart } from '../controllers/cartController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Protect all cart routes
router.use(protect);

// Add to cart
router.post('/add', addToCart);

// Get cart
router.get('/', getCart);

// Remove item from cart
router.delete('/remove', removeFromCart);

export default router;
