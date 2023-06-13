const http = require('http');

const server = http.createServer(function(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('We are finally the hello world devs gurus');
});

const port = 3000;
server.listen({ port: port, host: 'localhost' }, function() {
  console.log(`Server is running on port : ${port}`);
}) 