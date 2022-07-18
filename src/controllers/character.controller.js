const characterService = require("../Services/character.service");
const mongoose = require("mongoose");

const getAllCharacters = async (req, res) => {
  const characters = await characterService.getAllService();
  if (characters.length == 0) {
    return res.status(404).send({ message: "There is no characters!" });
  }
  res.send(characters);
};

const getByIdCharacter = async (req, res) => {
  const idParam = req.params.id;
  const character = await characterService.getByIdService(idParam);
  if (!character) {
    return res.status(404).send({ message: "Character not found!" });
  }
  res.send(character);
};

const createCharacterController = async (req, res) => {
  const character = req.body;
  const newCharacter = await characterService.createCharacterService(character);
  res.status(201).send(newCharacter);
};

const updatedCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const character = req.body;
  if (!idParam) {
    return res.status(404).send({ message: "Character not found!" });
  }
  const updatedCharacter = await characterService.updatedCharacterService(
    idParam,
    character,
  );
  res.send(updatedCharacter);
};
const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  await characterService.deleteCharacterService(idParam);
  res.send({ message: "Character deleted successfully!" });
};

module.exports = {
  getAllCharacters,
  getByIdCharacter,
  createCharacterController,
  updatedCharacterController,
  deleteCharacterController,
};

