const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Lance = sequelize.define("lance", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valorLance: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    dataLance: {
        type: Sequelize.DATETIME,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});

module.exports = Lance;