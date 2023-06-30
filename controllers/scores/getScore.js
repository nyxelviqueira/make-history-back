const getScoresQuery = require("../../db/scoreQueries/getScoresQuery");

const getScores = async (req, res, next) => {
  try {
    const scores = await getScoresQuery();

    // Cambio aquí: envía los scores directamente bajo la clave "data"
    res.send({
      status: "ok",
      data: scores,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = getScores;
