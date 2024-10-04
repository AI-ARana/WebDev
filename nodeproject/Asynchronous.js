const fs = require('fs');

// Asynchronously read the file (non-blocking)
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log(data);
});

console.log('This will print before the file content');
