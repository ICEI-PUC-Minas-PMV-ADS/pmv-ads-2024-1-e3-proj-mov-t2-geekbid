const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Leilao = sequelize.define("leilao", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dataInicio: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dataFim: {
        type: Sequelize.DATE,
        allowNull: false
    },
    precoAtual: {
        type: Sequelize.DOUBLE,
    }
});

module.exports = Leilao;