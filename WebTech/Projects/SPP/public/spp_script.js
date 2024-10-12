import {response} from "express";


document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const grades = document.getElementById('grades').value.split(',').map(Number); // Convert grades to an array of numbers
    const attendance = parseFloat(document.getElementById('attendance').value);    // Parse attendance as float

    // Ensure grades are valid numbers
    if (grades.some(isNaN) || isNaN(attendance)) {
        document.getElementById('result').innerText = 'Please enter valid grades and attendance.';
        return;
    }

    fetch('http://localhost:3000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grades: grades, attendance: attendance})
    })
        .then(response => response.json())
        .then(data => {
            // Display the predicted grade
            document.getElementById('result').innerText = `Predicted Final Grade: ${data.predictedGrade}`;
        })
        .catch(error => {
            console.error('Fetch error:', error);
            console.error('Response status:', response.status);
            console.error('Response body:', response.text());  // Log the response body
            document.getElementById('result').innerText = 'Error predicting grade';
        });
});
