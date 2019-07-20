// Update with your config settings.

module.exports = {

  development: {
    client: "postgres", // pg is the database library for postgreSQL on knexjs
    connection: {
      host: "127.0.0.1", // Your local host IP
      user: "dariusgoore", // Your postgres user name
      database: "writtr_express_api" // Your database name
    }
  }
};
