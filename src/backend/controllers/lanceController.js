const Lance = require('../models/lanceModel')
const Leilao = require('../models/leilaoModel')
const Produto = require('../models/produtoModel')
const Usuario = require('../models/usuarioModel')

// Função para controlar erros

const handleErrors = err => {
  let errors = {}

  // Erros de validação
  if (err.name === 'SequelizeValidationError') {
    err.errors.forEach(error => {
      errors[error.path] = error.message
    })
  }

  return errors
}

// Métodos do controller
const lanceController = {
  // Dar lance em um leilão
  async cadastrarLance(req, res) {
    try {
      const { usuarioId, leilaoId, valorLance } = req.body
      const dataLance = new Date()

      // Checar se o usuário dando lance é o mesmo que criou o leilão
      const leilao = await Leilao.findByPk(leilaoId)
      if (leilao.usuarioId === usuarioId) {
        return res
          .status(403)
          .json({ message: 'Você não pode dar lances em seus leilões' })
      }

      const lance = await Lance.create({
        valorLance,
        dataLance,
        usuarioId,
        leilaoId
      })
      res.status(201).json(lance)
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  },

  // Retornar todos os lances de um leilão
  async buscarLances(req, res) {
    try {
      const { leilaoId } = req.params
      const lances = await Lance.findAll({ where: { leilaoId } })
      res.status(200).json(lances)
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  },

  async buscarLancesPorUsuario(req, res) {
    try {
      const { usuarioId } = req.params
      const lances = await Lance.findAll({
        where: { usuarioId },
        include: [
          { model: Usuario, as: 'usuario' },
          {
            model: Leilao,
            as: 'leilao',
            include: [{ model: Produto, as: 'produto' }]
          }
        ]
      })
      res.status(200).json(lances)
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  },

  // Retornar os últimos 5 lances de um leilão
  async buscarUltimosLances(req, res) {
    try {
      console.log('Conteúdo do objeto req:', req) // Adicione este log
      const { leilaoId } = req.params
      console.log('ID do leilão:', leilaoId) // Verifica o ID recebido

      const lances = await Lance.findAll({
        where: { leilaoId },
        include: [
          {model: Usuario, as: 'usuario' },
        ],
        order: [['createdAt', 'DESC']],
        limit: 5
      })
      console.log('Lances encontrados:', lances) // Verifica os lances encontrados

      // Verifica se lances não está indefinido
      if (!lances) {
        throw new Error('Nenhum lance encontrado para este leilão')
      }

      res.status(200).json(lances)
    } catch (err) {
      console.error('Erro ao buscar últimos lances:', err) // Adiciona log de erro
      res.status(404).json({ message: err.message })
    }
  },

  async buscarTodosLances(req, res) {
    try {
      const lances = await Lance.findAll() // Buscar todos os lances sem filtro
      res.status(200).json(lances)
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  },

  // Retornar os detalhes de um lance específico
  async buscarLance(req, res) {
    try {
      const { id } = req.params
      const lance = await Lance.findByPk(id)

      if (!lance) {
        throw new Error('Bid not found')
      }

      res.status(200).json(lance)
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  }

  // Excluir lance
  // async excluirLance(req, res) {
  //     try {
  //         const { id } = req.params;
  //         const linhaLanceExcluido = await Lance.destroy({ where: { id: id } });

  //         if (linhaLanceExcluido === 0) {
  //             throw new Error('Lance não encontrado');
  //         }

  //         res.status(204).json({ message: 'Lance excluído com sucesso' });
  //     } catch (err) {
  //         res.status(404).json({ message: err.message });
  //     }
  // }
}

module.exports = lanceController
