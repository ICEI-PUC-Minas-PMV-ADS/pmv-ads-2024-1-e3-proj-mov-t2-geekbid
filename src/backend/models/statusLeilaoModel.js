const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const StatusLeilao = sequelize.define("statusLeilao", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricaoStatusLeilao: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = StatusLeilao;