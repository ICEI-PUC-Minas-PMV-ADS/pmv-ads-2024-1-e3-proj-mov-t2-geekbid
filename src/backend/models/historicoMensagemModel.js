const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const historicoMensagem = sequelize.define("historicoMensagem", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricaoStatusMensagem: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = historicoMensagem;