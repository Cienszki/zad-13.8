var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8;');
    if (request.method === 'GET' && request.url === '/elo') {
        fs.readFile('./index.html', 'UTF-8', function(err, data) {
            response.write(data);
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.write('<img src="./404.jpg">');
        response.end();
    }
});
server.listen(8080);