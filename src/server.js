'use strict';

// Constants
const express = require('express')
const { PORT = '3000', HOST = '0.0.0.0' } = process.env

// App
const app = express();

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Hello World')
});

// Listener
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
