'use strict';

// Constants
const routes = require('express').Router()
const UserController = require('../app/controllers/UserController');
const ActionController = require('../app/controllers/ActionController');

// Routes
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' })
});

// Users
routes.get('/users', UserController.index);

// Actions
routes.get('/actions', ActionController.index);
routes.get('/actions/:id', ActionController.show);
routes.post('/actions/store', ActionController.store);
routes.post('/actions/update/:id', ActionController.update);
routes.post('/actions/destroy/:id', ActionController.destroy);

// Export
module.exports = routes;
