var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write('Anurag Rana');
    // Read query String
    res.write(req.url);
    /*Use the url module to turn the querystring into an object:*/
    var q = url.parse(req.url, true).query;
    /*Return the year and month from the query object:*/
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);
