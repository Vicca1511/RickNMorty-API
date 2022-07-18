const User = require("../users/User");

const loginService = async (name) => User.findOne({name:name}).select("+password");

module.exports ={loginService}