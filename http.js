/**
 * Sample exemple to start server and write message on invocation
 */
const http = require('http');

function handleRequest(req, res) {
    console.log('starting http server');
    res.writeHead(200,'',{'content-type':'text/plain'});
    res.write('bonjour david');
    res.end();

}

const server = http.createServer(handleRequest);
server.listen(8001);
