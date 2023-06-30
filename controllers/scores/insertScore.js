const insertScoreQuery = require("../../db/scoreQueries/insertScoreQuery");

const { generateError } = require("../../helpers");

const insertScore = async (req, res, next) => {
  try {
    const { username, score } = req.body;

    // Si falta algún campo lanzamos un error.
    if (!username || !score) {
      throw generateError("Faltan campos", 400);
    }

    // Insertamos una nueva puntuación en la base de datos.
    await insertScoreQuery(username, score);

    res.send({
      status: "ok",
      message: "Puntuación insertada",
    });
  } catch (err) {
    next(err);
  }
};
module.exports = insertScore;
