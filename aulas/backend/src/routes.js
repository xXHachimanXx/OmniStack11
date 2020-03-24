const express = require('express');
const OngController = require('./controllers/OngController');

// Desacoplando o módulo de rotas do express em um nova variável
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;