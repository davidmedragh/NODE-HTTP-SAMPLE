/**
 * Sample exemple to start server and response to url
 */
const http = require('http');
const url = require('url');

function handleRequest(req, res) {
    console.log('starting http server');
    const parseUrl = url.parse(req.url);
    if ('/' === parseUrl.path){
        res.writeHead(200,'',{'content-type':'text/plain'});
        res.end('bonjour david');

    }
    else {
        res.writeHead(200,'',{'content-type':'text/plain'});
        res.end('request not /');

    }

}

const server = http.createServer(handleRequest);
server.listen(8001);
