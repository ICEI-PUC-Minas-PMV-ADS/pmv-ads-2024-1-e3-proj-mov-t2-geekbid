const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const CategoriaProduto = sequelize.define("categoriaProduto", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricaoCategoriaProduto: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = CategoriaProduto;