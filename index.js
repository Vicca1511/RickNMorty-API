require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectToDb = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();


app.use(cors());
app.use(express.json());

connectToDb();

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
