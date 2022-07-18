const mongoose = require('mongoose');
const DATABASE_URL = process.env.URL_DATABASE;

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
