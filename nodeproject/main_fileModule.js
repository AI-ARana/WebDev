const http = require('http');
const FileHandler = require('./fileModule'); // Import the custom file module

const fileHandler = new FileHandler();

http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const filePath = './anurag.txt';

    const content = `Dr Anurag Rana 
    Post Doc (University of Colorado)
    Associate Professor
    (Yogananda School of AI, Computers and Data Sciences)
    Faculty of Engineering
    Shoolini University`;
/*
    const content1 = [`Dr Anurag Rana`,
    `Post Doc (University of Colorado)`,
    `Associate Professor`,
    `(Yogananda School of AI, Computers and Data Sciences)`,
    `Faculty of Engineering`,
    `Shoolini University`];

*/

    try {
        // Write to a file
       const writeMessage = await fileHandler.writeFile(filePath, `Hello Anurag Rana`);
       //const writeMessage = await fileHandler.writeFile(filePath, content);
       // const writeMessage = await fileHandler.writeFileLineByLine(filePath, content1);
        res.write(writeMessage + '<br>');

        // Read the file content
        const data = await fileHandler.readFile(filePath);
        res.write('File Content: ' + data + '<br>');
        //res.write('File Content:<br>' + data.replace(/\n/g, '<br>')); // Display file content line by line in the browser
    } catch (err) {
        res.write('Error: ' + err.message);
    }

    res.end();
}).listen(8080);

console.log('Server running at http://localhost:8080/');
