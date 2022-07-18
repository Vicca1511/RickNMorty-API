const userService = require("./user.service");

const createUserController = async (req, res) => {
  const { name, username, email, password, photo } = req.body;
  if (!name || !username || !password || !photo) {
    return res.status(403).send({
      message: "Provide all fields: name, username, email, password and photo!",
    });
  }

  const findUser = await userService.findByNameService(name);

  if (findUser) {
    return res.status(400).send({ message: "User already exists!" });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err));

  if (!user) {
    return res.status(400).send({ message: " Error creating user!" });
  }
  res.status(201).send(user);
};

const getAllUserController = async (req, res) => {
  res.send({ message: "find all users" });
};

module.exports = { createUserController, getAllUserController };
