const express = require('express');

const app = express();

app.get('/', (request, response ) => {
return response.json({
    evento: 'Semana de Estudo ',
    aluno: 'Joselaine Romao'
});
});

app. listen(3333);
