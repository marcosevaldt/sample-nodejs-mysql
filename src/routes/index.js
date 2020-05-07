'use strict';

// Constants
const routes = require('express').Router()
const UserController = require('../app/controllers/UserController');

// Routes
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' })
});

routes.get('/users', UserController.index);

// Export
module.exports = routes;
