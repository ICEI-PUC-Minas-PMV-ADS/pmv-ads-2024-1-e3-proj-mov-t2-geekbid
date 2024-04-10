const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const EstadoProduto = sequelize.define("estadoProduto", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricaoEstadoProduto: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = EstadoProduto;