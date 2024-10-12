const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes); // Add cart routes here
// Redirect root to /api/products
app.get('/', (req, res) => {
    res.redirect('/api/products');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
