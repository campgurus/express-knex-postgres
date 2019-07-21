const path = require('path');
const BASE_PATH = path.join(__dirname, 'db');

module.exports = {

  development: {
    client: "postgres", // pg is the database library for postgreSQL on knexjs
    connection: {
      host: "127.0.0.1", // Your local host IP
      user: "dariusgoore", // Your postgres user name
      database: "writtr_express_api" // Your database name
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  test: {
    client: 'postgres', // pg is the database library for postgreSQL on knexjs
    connection: {
      host: "127.0.0.1", // Your local host IP
      user: "dariusgoore", // Your postgres user name
      database: "writtr_express_api_test" // Your database name
    }
    // ,
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   directory: path.join(BASE_PATH, 'migrations')
    // },
    // seeds: {
    //   directory: path.join(BASE_PATH, 'seeds')
    // }
  }
};
