const express = require('express');
const db = require('../database');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

module.exports = router;
