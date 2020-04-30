const express = require('express');

const { celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// autenticação de login com acesso valido
routes.post('/session',  celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}), SessionController.create); //longin


// autenticação de dados
routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
     name: Joi.string().required(),
     email: Joi.string().required().email(),
     whatsapp: Joi.string().required().min(10).max(11),
     city: Joi.string().required(),
     uf: Joi.string().required().length(2)
    })
}), OngController.create);

// autenticação de lista de caso do perfil, só consegue ver com autorizado no header
routes.get('/profile', celebrate({
   [ Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
   }).unknown(),
}), ProfileController.index); //listar

// autenticação de numero de paginas
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentsController.index);

// autenticação de dados inseridos
routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        //authorization: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
     })//.unknown(),
}), IncidentsController.create);

// autenticação no momento de deletar
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete);

module.exports = routes;