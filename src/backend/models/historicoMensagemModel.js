const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const HistoricoMensagem = sequelize.define("historicoMensagem", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
},
{
    freezeTableName: true
});

module.exports = HistoricoMensagem;