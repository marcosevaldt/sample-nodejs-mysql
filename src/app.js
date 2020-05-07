'use strict';

const express = require('express')
const { Sequelize } = require('sequelize')

// Constants
const { PORT = '3000', HOST = '0.0.0.0' } = process.env
const sequelize = new Sequelize('mysql://root:root@mysql:3306/acao_reacao')

// App
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
});

app.get('/database', async (req, res) => {
  try {
    await sequelize.authenticate()
    res.status(200).send('Connection has been established successfully.')
  } catch (error) {
    console.log('Unable to connect to the database:', error)
  }
});
