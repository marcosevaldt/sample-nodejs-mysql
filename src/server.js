'use strict';

// Constants
const { PORT = '3000', HOST = '0.0.0.0' } = process.env
const dotenv = require('dotenv-safe').config();
const express = require('express')
const routes = require('./routes');

// App
const app = express();

// Routes
app.use('/', routes);

// Listener
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
