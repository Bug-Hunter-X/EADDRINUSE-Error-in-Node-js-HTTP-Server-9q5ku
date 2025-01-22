const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);

function startServer(port) {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use. Retrying in 1 second...`);
      setTimeout(() => startServer(port), 1000);
    } else {
      console.error(`Server failed to start: ${err}`);
    }
  });
}

const port = 8080;
startServer(port); 