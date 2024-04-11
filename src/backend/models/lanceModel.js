const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Lance = sequelize.define("lance", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valorLance: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    dataLance: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
},
{
    freezeTableName: true
});

module.exports = Lance;