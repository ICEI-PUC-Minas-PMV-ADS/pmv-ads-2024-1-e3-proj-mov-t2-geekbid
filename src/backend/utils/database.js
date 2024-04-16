// npm install --save sequelize
// npm install --save pg pg-hstore # Postgres

const Sequelize = require("sequelize");

const sequelize = new Sequelize("geekbid", "postgres", "geekbid", {dialect: "postgres", host:"localhost"});

module.exports = sequelize;