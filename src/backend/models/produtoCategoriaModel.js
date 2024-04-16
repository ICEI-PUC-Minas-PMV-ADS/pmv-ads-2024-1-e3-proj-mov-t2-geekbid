const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const ProdutoCategoria = sequelize.define("produtoCategoria", {
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

module.exports = ProdutoCategoria;