const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const incidents = await connection('incidents').select('*');
    
        return res.json(incidents);
    },
    async create(req, res) {
        const { title, description, value } = req.body;

        // Headers guardam o contexto da requisição
        const ong_id = req.headers.authorization; // Pegar id da 'ong' que criou o 'incident'       
        const [id] = await connection('incidents').insert({
            title, 
            description, 
            value,
            ong_id,
        });

        return res.json({ id });        
    },
};