const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Endereco = sequelize.define("endereco", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    estado: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    cep: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

exports.endereco = Endereco;