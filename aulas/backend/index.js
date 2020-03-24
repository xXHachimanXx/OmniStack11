const express = require('express');

const app = express();

// Isso vai dizer ao express que o body da requisição vai 
// ser entendida com um JSON.
app.use(express.json());

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

app.get('/users/:id', (req, res) => {
    const params = req.params;

    console.log(params);

    res.json({
        evento: "Semana Omnistack 11.0",
        aluno: "Felipe (xXHachimanXx) Andrade"
    });
});

app.post('/users', (req, res) => {
    const body = req.body;

    console.log(body);

    res.json({
        evento: "Semana Omnistack 11.0",
        aluno: "Felipe (xXHachimanXx) Andrade"
    });
});

app.listen(3333);