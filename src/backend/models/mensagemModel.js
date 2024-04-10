const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Mensagem = sequelize.define("mensagem", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipoMensagem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricaoMensagem: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Mensagem;