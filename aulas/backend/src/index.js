const express = require('express'); // não usa-se ./ pois este não é um arquivo
const routes = require('./routes'); // usa-se ./ pois este é um arquivo

const app = express();

// Isso vai dizer ao express que o body da requisição vai 
// ser entendida com um JSON.
app.use(express.json());
app.use(routes); // Utilizar rotas

app.listen(3333);