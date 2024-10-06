const http = require('http');
const Logger = require('./loggerModule'); // Import the custom logger module

const logger = new Logger();

// Register an event listener for log events
logger.on('log', (event) => {
    console.log(`Log event: Level - ${event.level}, Message - ${event.message}`);
});

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/info') {
        logger.logInfo('This is an info message');
        res.write('Logged an info message');
    } else if (req.url === '/warn') {
        logger.logWarning('This is a warning message');
        res.write('Logged a warning message');
    } else if (req.url === '/error') {
        logger.logError('This is an error message');
        res.write('Logged an error message');
    } else {
        res.write('Use /info, /warn, or /error to log different types of messages.');
    }

    res.end();
}).listen(8080);

console.log('Server running at http://localhost:8080/');
