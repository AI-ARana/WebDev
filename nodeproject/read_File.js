var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('F:/WebDev/WebTech/HTML_Basics/HTML_CSS.html', function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found: The file could not be found.');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
