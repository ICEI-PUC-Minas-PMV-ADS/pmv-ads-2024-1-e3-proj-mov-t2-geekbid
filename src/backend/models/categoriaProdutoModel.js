const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const CategoriaProduto = sequelize.define("categoriaProduto", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricaoCategoriaProduto: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true
});

module.exports = CategoriaProduto;