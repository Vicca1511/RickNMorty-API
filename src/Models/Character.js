const mongoose = require('mongoose');

const characterScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Character = mongoose.model('Character', characterScheme, 'character' );

module.exports = Character;
