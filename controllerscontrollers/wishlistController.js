import Wishlist from '../models/Wishlist.js';

// @desc    Add product to wishlist
export const addToWishlist = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  try {
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = await Wishlist.create({ userId, products: [productId] });
    } else {
      if (!wishlist.products.includes(productId)) {
        wishlist.products.push(productId);
      }
      await wishlist.save();
    }

    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get wishlist
export const getWishlist = async (req, res) => {
  const userId = req.user.id;

  try {
    const wishlist = await Wishlist.findOne({ userId }).populate('products');
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Remove product from wishlist
export const removeFromWishlist = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  try {
    let wishlist = await Wishlist.findOne({ userId });
    wishlist.products = wishlist.products.filter(prod => prod.toString() !== productId);
    await wishlist.save();
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
