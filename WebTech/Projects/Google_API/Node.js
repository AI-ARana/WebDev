const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/submit', async (req, res) => {
    try {
        const response = await fetch('YOUR_WEB_APP_URL', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const result = await response.text();
        res.send(result);
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
