const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Produto = sequelize.define("Produto", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeProduto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricaoProduto: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    precoInicial: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    urlImagemProduto: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Produto;