const express = require('express');
const cartModel = require('../models/cartModel');
const router = express.Router();

// Get cart items
router.get('/', (req, res) => {
    const items = cartModel.getCartItems();
    res.json(items);
});

// Add item to cart
router.post('/', (req, res) => {
    const item = req.body; // Item should have id, name, price, etc.
    cartModel.addToCart(item);
    res.status(201).json(item);
});

// Clear the cart
router.delete('/', (req, res) => {
    cartModel.clearCart();
    res.status(204).send();
});

module.exports = router;
