require('dotenv').config();
const characterService = require("../Services/character.service");
const authService = require("../auth/auth.service");


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
  const {name , username , email, password , photo} = req.body;
  if (!name || !username || !email || !password ){
    return res.status(400).send({ message: "Fill all fields!" });
  }
  
  const findUsername = await characterService.findByUsername(username);
  const findEmail = await characterService.findByEmail(email)

  if(findEmail){
    return res.status(400).send({ message: "This email is already in use."});  
  }

  if(findUsername){
    return res.status(400).send({message: "This username is already in use"} );
  }


  const user = await characterService
    .createCharacterService(req.body)
    .catch((err) => console.log(err));
    
    if(!user){
      return res.status(400).send({ message: "Error creating character" });
    }
    const token = authService.generateToken(user.id);

  res.status(201).send({
    user: {
      id:user.id,
      name,
      username,
      email,
      photo,
    },
    token,
  });
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
