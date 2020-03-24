const express = require('express');

// Desacoplando o módulo de rotas do express em um nova variável
const routes = express.Router();


/**
 * Rota / recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET:    Buscar uma informação no backend
 * POST:   Criar uma informação no backend
 * PUT:    Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */
routes.get('/users/:id', (req, res) => {
    const params = req.params;

    console.log(params);

    res.json({
        evento: "Semana Omnistack 11.0",
        aluno: "Felipe (xXHachimanXx) Andrade"
    });
});

routes.post('/users', (req, res) => {
    const body = req.body;

    console.log(body);

    res.json({
        evento: "Semana Omnistack 11.0",
        aluno: "Felipe (xXHachimanXx) Andrade"
    });
});

module.exports = routes;