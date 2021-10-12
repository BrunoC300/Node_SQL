const Sequelize = require("sequelize");

const connection = new Sequelize("nodeSQL", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
