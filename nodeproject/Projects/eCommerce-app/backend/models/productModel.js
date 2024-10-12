const db = require('../database');

// Get all products
const getAllProducts = (callback) => {
    db.query('SELECT * FROM products', callback);
};

// Get a product by ID
const getProductById = (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', [id], callback);
};

module.exports = {
    getAllProducts,
    getProductById,
};
