const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

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

characterScheme.pre('save', async function (next){
  
  this.password = await bcrypt.hash(this.password , 10);
  next()


});


const Character = mongoose.model('Character', characterScheme, 'character' );

module.exports = Character;
