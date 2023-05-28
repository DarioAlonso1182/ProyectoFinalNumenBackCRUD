const express = require('express');
const getPriceExample = require('../controller/exampleController');
const exampleRouter = express.Router();

exampleRouter.get('/price/:dolars', getPriceExample);

module.exports = exampleRouter;