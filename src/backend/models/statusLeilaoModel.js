const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const StatusLeilao = sequelize.define("statusLeilao", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricaoStatusLeilao: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true
});

module.exports = StatusLeilao;