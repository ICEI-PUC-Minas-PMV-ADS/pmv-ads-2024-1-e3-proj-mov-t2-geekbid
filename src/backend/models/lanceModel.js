const { Sequelize, DataTypes } = require('sequelize')

const sequelize = require('../utils/database')
const Leilao = require('./leilaoModel')
const Usuario = require('./usuarioModel')

const Lance = sequelize.define(
  'lance',
  {
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
    freezeTableName: true,
    indexes: [
      {
        unique: false,
        fields: ['usuarioId', 'leilaoId']
      }
    ]
  }
)

Lance.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' })
Lance.belongsTo(Leilao, { foreignKey: 'leilaoId', as: 'leilao' })

module.exports = Lance
