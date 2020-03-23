const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        evento: "Semana Omnistack 11.0",
        aluno: "Felipe (xXHachimanXx) Andrade"
    });
});

app.listen(3333);