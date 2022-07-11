const routes = require('express').Router();
const controllerCharacter = require('../controllers/character.controller');
const { idValidation, bodyObjectValidation } = require('../middlewares/character.midleware');


routes.get('/',controllerCharacter.getAllCharacters);
routes.get('/:id', idValidation , controllerCharacter.getByIdCharacter);
routes.post('/', bodyObjectValidation, controllerCharacter.createCharacterController);
routes.put('/:id', idValidation, bodyObjectValidation , controllerCharacter.updatedCharacterController);
routes.delete('/:id', idValidation, controllerCharacter.deleteCharacterController);

module.exports = routes;