import mongoose from "mongoose";
const DATABASE_URL = "mongoose://localhost27017/rick_n_morty";

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
