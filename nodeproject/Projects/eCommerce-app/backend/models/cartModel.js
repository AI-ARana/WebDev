const db = require('../database');

// This example uses a simple in-memory cart for demonstration
let cart = [];

// Add item to cart
const addToCart = (item) => {
    cart.push(item);
};

// Get cart items
const getCartItems = () => {
    return cart;
};

// Clear cart
const clearCart = () => {
    cart = [];
};

module.exports = {
    addToCart,
    getCartItems,
    clearCart,
};
