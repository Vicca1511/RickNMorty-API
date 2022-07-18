const authService = require('./auth.service');
const bcrypt = require('bcryptjs');

const loginController = async (req, res) => {

  const { name, password } = req.body;

  const user = await authService.loginService(name);

  if (!user) {
    return res.status(400).send({ message: "Inexistent User"})
  }

  const isPasswordOkay = await bcrypt.compare(password , user.password);

  if (!isPasswordOkay) {
    return res.status(400).send({ message: "Password is incorrect"});
  }

  res.send(user);

}

module.exports = {loginController};