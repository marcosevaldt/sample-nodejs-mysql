'use strict';

// Constants
const routes = require('express').Router()
const Model = require('../app/models');

// Routes
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' })
});

routes.get('/database', async (req, res) => {
  Model.users.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
});

// Export
module.exports = routes;
