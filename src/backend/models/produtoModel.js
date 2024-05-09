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
        },
        categoriaProduto: {
            type: DataTypes.ENUM('Quadrinhos e Mangás', 'Colecionáveis', 'Jogos de Tabuleiro e Card Games', 'Jogos Eletrônicos',
                                'Livros e Literatura Fantástica', 'Filmes e Séries', 'Tecnologia e Gadgets', 'Roupas e Acessórios',
                                'Arte e Decoração', 'Memorabilia'),
            defaultValue: "Colecionáveis"
        },
    },
    {
        freezeTableName: true
    }
);

module.exports = Produto;