// npm install --save sequelize
// npm install --save pg pg-hstore # Postgres

const Sequelize = require("sequelize");

const sequelize = new Sequelize("database_schema", "user", "password", {dialect: "postgres", host:"localhost"});

module.exports = sequelize;