const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const StatusUsuario = sequelize.define("statusUsuario", {
    idStatusUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricaoStatusUsuario: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

exports.statusUsuario = StatusUsuario;