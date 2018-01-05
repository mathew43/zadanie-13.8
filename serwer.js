var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    fs.readFile('./index.html',  function(err, data) {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        if (request.method === 'GET' && request.url === '/') {
            response.write(data);
            response.end();
        } else {
            response.statusCode = 404;
            response.write('<img src="http://mistrzowie.org/uimages/services/mistrzowie/i18n/pl_PL/201103/1299792128_by_ghost666.jpg?1299792128">');
            response.end();
        }
    });
});

server.listen(9000);