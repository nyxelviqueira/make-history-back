const getConnection = require("../getConnection");

const getScoresQuery = async (email) => {
  let connection;
  try {
    connection = await getConnection();

    let [scores] = await connection.query(
      "SELECT * FROM players ORDER BY score DESC"
    );

    if (scores.length < 1) {
      throw generateError(`We didn't find any service`, 404);
    }

    return scores;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = getScoresQuery;
