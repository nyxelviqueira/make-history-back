require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { PORT } = process.env;

const app = express();

app.use(cors());

// Middlewares
app.use(bodyParser.json());

// Rutas
app.get("/", (req, res) => {
  res.send("Hola desde el servidor!");
});

const { insertScore, getScore } = require("./controllers/scores");

app.post("/addscore", insertScore);

app.get("/scores", getScore);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
