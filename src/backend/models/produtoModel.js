const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Produto = sequelize.define("produto", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nomeProduto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricaoProduto: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        precoInicial: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        urlImagemProduto: {
            type: DataTypes.STRING
        },
        estadoProduto: {
            type: DataTypes.ENUM('novo','usado'),
            defaultValue: "novo"
        }
    },
    {
        freezeTableName: true
    }
);

module.exports = Produto;