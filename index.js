const express = require("express");
const cors = require("cors");
const connectToDb = require('./src/database/database');
const app = express();


app.use(cors());
app.use(express.json());

connectToDb();

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
