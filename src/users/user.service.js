const User = require("./User");

const findByNameService = (name) => User.findOne({ name: name });

const createUserService = (body) => User.create(body);

module.exports = { findByNameService, createUserService };
