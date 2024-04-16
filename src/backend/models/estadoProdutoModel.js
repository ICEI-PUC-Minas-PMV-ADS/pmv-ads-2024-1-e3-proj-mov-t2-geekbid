const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const EstadoProduto = sequelize.define("estadoProduto", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricaoEstadoProduto: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true
});

module.exports = EstadoProduto;