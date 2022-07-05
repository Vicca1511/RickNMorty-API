import e from "express";
import mongoose from "mongoose";

const characterScheme = new MongooseScheme({
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

const Character = mongoose.model('Character', characterScheme ,'person');

module.exports = {
    Character
};