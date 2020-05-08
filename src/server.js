'use strict';

// Constants
const { PORT = '3000', HOST = '0.0.0.0' } = process.env
const dotenv = require('dotenv-safe').config();
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes');

// App
const app = express();

// Routes
app.use('/v1', routes);

// Force JSON request
app.use(bodyParser.json())

// Listener
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
