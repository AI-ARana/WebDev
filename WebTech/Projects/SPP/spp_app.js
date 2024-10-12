const express = require('express');
const app = express();

const path = require('path');


// Middleware to serve static files (like spp_index.html)
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
const cors = require('cors');
const {join} = require("node:path");
const {spawn} = require("node:child_process");
app.use(cors());


// Serve the frontend
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'spp_index.html'));
});

// API for predicting student performance
app.post('/predict', (req, res) => {
    const { grades, attendance } = req.body;

    // Call your Python script and handle response
    const pythonProcess = spawn('python', ['F:\\VSCode\\PythonDev\\Python\\spp_model.py', JSON.stringify(grades), attendance]);

    pythonProcess.stdout.on('data', (data) => {
        const predictedGrade = data.toString();
        res.json({ predictedGrade: predictedGrade });
    });

    pythonProcess.stderr.on('data', (error) => {
        console.error('Python error:', error.toString());
      //  res.status(500).send('Error processing prediction');
        res.status(500).json({ error: 'Prediction failed' });

    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
