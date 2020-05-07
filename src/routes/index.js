'use strict';

// Constants
const routes = require('express').Router();

// Routes
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

routes.get('/database', (req, res) => {
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  });
  sequelize
  .authenticate()
  .then(() => {
    res.status(200).json({ message: 'Connection has been established successfully.' });
  })
  .catch(err => {
    res.status(200).json({ message: 'Unable to connect to the database:', error: err});
  });
});

// Export
module.exports = routes;
