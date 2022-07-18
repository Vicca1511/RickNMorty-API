require("dotenv").config();
const authService = require("./auth.service");
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginService(email);
  if (!user) {
    return res.status(400).send({ message: "Inexistent User" });
  }

  const isPasswordOkay = await bcrypt.compare(password, user.password);
  if (!isPasswordOkay) {
    return res.status(400).send({ message: "Password is incorrect" });
  }

  const token = authService.generateToken(user.id);

  console.log(token);

  res.send({ token });
};

module.exports = { loginController };
