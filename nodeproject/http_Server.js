const http = require('http');
const url = require('url');

// Create an HTTP server that listens on port 8080
http.createServer((req, res) => {
    // Parse the URL to extract query parameters
    const queryObject = url.parse(req.url, true).query;
    const year = queryObject.year || 'not specified';
    const month = queryObject.month || 'not specified';

    // Respond to the client with the extracted parameters
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`Year: ${year}, Month: ${month}`);
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
