const routes = require('express').Router();
const controllerCharacter = require('../controllers/character.controller');
const { idValidation, bodyObjectValidation } = require('../middlewares/character.midleware');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('../../../swagger.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));


routes.get('/All',controllerCharacter.getAllCharacters);
routes.get('/ByID/:id', idValidation , controllerCharacter.getByIdCharacter);
routes.post('/', bodyObjectValidation, controllerCharacter.createCharacterController);
routes.put('/:id', idValidation, bodyObjectValidation , controllerCharacter.updatedCharacterController);
routes.delete('/:id', idValidation, controllerCharacter.deleteCharacterController);

module.exports = routes;