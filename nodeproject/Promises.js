/*Promises provide a cleaner way to handle asynchronous code without nesting many callbacks (avoiding "callback hell").

Example with Promises: */
const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });

console.log('This will print before the file content');
