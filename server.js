'use strict'

const http = require('http');
const url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + 'received.');
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

exports.start = start;

// And our code does just that: Whenever a request is received, it uses the response.writeHead()
// function to send an HTTP status 200 and content-type in the HTTP response header, and the
// response.write() function to send the text “Hello World” in the HTTP response body.
// At last, we call response.end() to actually finish our response