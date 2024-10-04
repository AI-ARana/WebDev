const fs = require('fs');

// Synchronously read the file (blocks execution)
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

console.log('This will print after the file content');
