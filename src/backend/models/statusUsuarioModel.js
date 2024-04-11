const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const StatusUsuario = sequelize.define("statusUsuario", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricaoStatusUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true
});

module.exports = StatusUsuario;