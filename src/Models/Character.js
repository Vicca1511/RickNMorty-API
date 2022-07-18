const mongoose = require('mongoose');

const characterScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    // selected: false,
  },
  photo: {
    type: String,
    required: false,
  },
});

const Character = mongoose.model('Character', characterScheme, 'character' );

module.exports = Character;
