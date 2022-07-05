const mongoose = require('mongoose');
const DATABASE_URL = "mongodb://localhost:27017/rick-and-morty";

function connectToDb() {
  mongoose
    .connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => {
      console.log(`Error connecting to database: ${err}`);
    });
}

module.exports = connectToDb;
