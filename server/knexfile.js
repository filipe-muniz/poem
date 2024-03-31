require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      connectionString: process.env.PG_CONNECTION_STRING,
    },
    migrations: {
      directory: "./db/migrations",
    },
  },
};
