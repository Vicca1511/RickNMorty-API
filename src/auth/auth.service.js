const User = require("../Characters/Models/Character");
const jwt = require("jsonwebtoken");

const loginService = async (email) => User.findOne({email:email}).select("+password");
const generateToken = (userId) => jwt.sign({id: userId }, process.env.SECRETKEY, { expiresIn: 86400 });



module.exports = { loginService, generateToken };




