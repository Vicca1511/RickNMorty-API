const Character = require("../Models/Character");


const getAllService = async () => {

  const allCharacter = await Character.find();
  return allCharacter;
};

const getByIdService = async (idParam) => {
  const task = await Character.findById(idParam);
  return task;

};

const createCharacterService = async (newTask) => {

  const taskOriginated = await Character.create(newTask);
  return taskOriginated;
};

const updatedCharacterService = async (id, characterEdit) => {
  const characterUpdate = await Character.findByIdAndUpdate(id, characterEdit).setOptions({
    returnOriginal: false,
  });
  return characterUpdate;

};

const deleteCharacterService = async (id) => {
  return await Character.findByIdAndDelete(id);
}




module.exports = {

  getAllService,
  getByIdService,
  createCharacterService,
  updatedCharacterService,
  deleteCharacterService

};


