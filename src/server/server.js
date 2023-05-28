const express = require('express');
const exampleRouter = require('../routes/exampleRouter');
const server = express();

server.use(express.json());
server.use('/api/example', exampleRouter);

module.exports = server;