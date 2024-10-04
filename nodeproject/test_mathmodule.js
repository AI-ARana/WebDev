var http = require('http');
var math = require('./mathmodule'); // Import the custom math module

// Create the server
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var num1 = 10;
    var num2 = 5;

    // Use the addNumbers and subtractNumbers methods from the custom module
    var sum = math.addNumbers(num1, num2);
    var difference = math.subtractNumbers(num1, num2);

    res.write(`The sum of ${num1} and ${num2} is: ` + sum + '<br>');
    res.write(`The difference between ${num1} and ${num2} is: ` + difference);
    res.end();
}).listen(8080); // Server listens on port 8080

console.log('Server running at http://localhost:8080/');
