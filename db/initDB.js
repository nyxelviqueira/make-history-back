require("dotenv").config();

const getConnection = require("./getConnection");

async function main() {
  // Variable que almacenará una conexión libre con la base de datos.
  let connection;

  try {
    connection = await getConnection();

    await connection.query("DROP TABLE IF EXISTS players");

    console.log("Creando tablas...");

    await connection.query(`
            CREATE TABLE IF NOT EXISTS players (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                score INT NOT NULL,
                date TIMESTAMP NOT NULL
            )
        `);

    console.log("¡Tablas creadas!");
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) connection.release();
    process.exit();
  }
}

// Llamamos a la función anterior.
main();
