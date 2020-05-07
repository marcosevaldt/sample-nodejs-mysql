'use strict';

// Constants
const routes = require('express').Router();

// Routes
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

// Export
module.exports = routes;
