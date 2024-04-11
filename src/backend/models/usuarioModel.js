const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Usuario = sequelize.define("usuario", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.DATEONLY
    }
},
{
    freezeTableName: true
});

module.exports = Usuario;