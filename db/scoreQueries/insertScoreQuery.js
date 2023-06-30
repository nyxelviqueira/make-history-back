const getConnection = require("../getConnection");

const insertUserQuery = async (username, score) => {
  let connection;

  try {
    connection = await getConnection();

    // Añadimos la puntuación y el jugador.
    await connection.query(
      `INSERT INTO players (username, score, date) VALUES (?, ?, ?)`,
      [username, score, new Date()]
    );
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertUserQuery;
