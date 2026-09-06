const http = require('http');
const { createServer } = require('http');
const app = require('./app');

const server = createServer(app);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});