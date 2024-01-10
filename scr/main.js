const http = require('http');
const port = 3000;
const host = '127.0.0.1';
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h2>Hello everyone</h2>');
});

server.listen(port, host, () => {
  console.log(`server is runnning using url http://${host}:${port}/`);
})