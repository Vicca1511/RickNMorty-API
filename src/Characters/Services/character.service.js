const Character = require("../Characters/Models/Character");

const getAllService = async () => {
  const allCharacter = await Character.find();
  return allCharacter;
};

const getByIdService = async (idParam) => {
  const character = await Character.findById(idParam);
  return character;
};

const findByEmail = async (email) => Character.findOne({email: email});

const findByUsername = async (username) => Character.findOne({username: username});

const createCharacterService = async (newCharacter) => {
  const newCharacterOriginated = await Character.create(newCharacter);
  return newCharacterOriginated;
};

const updatedCharacterService = async (id, characterEdit) => {
  const characterUpdate = await Character.findByIdAndUpdate(
    id,
    characterEdit,
  ).setOptions({
    returnOriginal: false,
  });
  return characterUpdate;
};

const deleteCharacterService = async (id) => {
  return await Character.findByIdAndDelete(id);
};

module.exports = {
  getAllService,
  getByIdService,
  createCharacterService,
  updatedCharacterService,
  deleteCharacterService,
  findByEmail,
  findByUsername
};
