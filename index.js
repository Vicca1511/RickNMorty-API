require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./src/database/database");
const routes = require("./src/Routes/character.route");
const authRoutes = require("./src/auth/auth.route");

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/character", routes);
app.use("/auth", authRoutes);

connectToDb();

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
