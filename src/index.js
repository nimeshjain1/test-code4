const port = process.env.PORT || 8080;

const http = require('http');


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ service: 'test-code4', status: 'ok' }));
});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
