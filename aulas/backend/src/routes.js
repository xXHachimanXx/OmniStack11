const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

// Desacoplando o módulo de rotas do express em um nova variável
const routes = express.Router();
/**
 * Rota / recurso
 */
routes.get('/ongs', async (req, res) => {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
});

routes.post('/ongs', async (req, res) => {
    const { name, email, whatsapp, city, uf } = req.body;

    // Gerar 4 bytes aleatórios, converter para string e retornar em 
    // forma de hexadecimal
    const id = crypto.randomBytes(4).toString('HEX');

    // Como o insert pode demorar um pouco, então colocamos um 'await'
    // para que a execução espere até que a operação seja finalizada.
    await connection('ongs').insert({
        id, 
        name, 
        email, 
        whatsapp, 
        city, 
        uf
    });
    
    res.json({ id });
});

module.exports = routes;