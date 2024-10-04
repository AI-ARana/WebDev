/*Async/await is built on promises and provides a more synchronous-looking code flow while still being asynchronous.

Example with async/await: */

const fs = require('fs').promises;

async function readFileAsync() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFileAsync();

console.log('This will print before the file content');
