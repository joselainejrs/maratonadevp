const express = require('express');

const routes = express.Router();

routes.post('/usuario/', (request, response) => {
    const body = request.body; 

    console.log(body);

    return response.json({
        evento: 'Semana de Estudo ',
        aluno: 'Joselaine Romao Soares'
    });
});

module.express = routes 
