const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/database");
const Usuario = require("./usuarioModel"); 
const Produto = require("./produtoModel");

const Leilao = sequelize.define("leilao", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dataInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataFim: {
        type: DataTypes.DATE,
        allowNull: false
    },
    precoAtual: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    statusLeilao: {
        type: DataTypes.ENUM(
            'cadastrado',
            'publicado',
            'ativo',
            'encerrado',
            'cancelado'),
        defaultValue: 'cadastrado'
    },
    duracaoDias: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      duracaoHoras: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      duracaoMinutos: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
},
{
    freezeTableName: true
});

// Definição da associação com o modelo Usuario e Produto
Leilao.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });
Leilao.belongsTo(Produto, { foreignKey: 'produtoId', as: 'produto' });


module.exports = Leilao;