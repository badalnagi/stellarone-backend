import express from 'express';
import { addToWishlist, getWishlist, removeFromWishlist } from '../controllers/wishlistController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Protect all wishlist routes
router.use(protect);

// Add to wishlist
router.post('/add', addToWishlist);

// Get wishlist
router.get('/', getWishlist);

// Remove from wishlist
router.delete('/remove', removeFromWishlist);

export default router;
