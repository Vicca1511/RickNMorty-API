const User = require("./User");

const findByNameService = (name) => User.findOne({ name: name });

const createUserService = (body) => User.create(body);

const getAllService = () => User.find();

module.exports = { findByNameService, createUserService , getAllService };
