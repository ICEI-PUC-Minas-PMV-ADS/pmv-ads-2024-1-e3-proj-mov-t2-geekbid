const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const StatusMensagem = sequelize.define("statusMensagem", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricaoStatusMensagem: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true
});

module.exports = StatusMensagem;