require('dotenv').config();
const path = require('path');

console.log('Resolved DB Path:', path.resolve(__dirname, '..', '..', process.env.DB_FILE));

module.exports = {
  development: {
    storage: path.resolve(__dirname, '..', '..', process.env.DB_FILE),
    dialect: "sqlite",
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
  test: {
    storage: path.resolve(__dirname, '..', '..', process.env.DB_TEST_FILE),
    dialect: "sqlite",
    seederStorage: "sequelize",
    // logging: false
  },
};
