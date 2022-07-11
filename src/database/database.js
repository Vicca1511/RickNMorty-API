const mongoose = require('mongoose');
const DATABASE_URL = "mongodb+srv://Viccari:Viccari1234@api-ricknmorty.70ixvtx.mongodb.net/?retryWrites=true&w=majority";

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
