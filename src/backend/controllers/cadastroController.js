const express = require('express')
const router = express.Router()
const Usuario = require('../models/usuarioModel')
const AppError = require('../utils/AppError')

class CadastroController {
  async create(request, response) {
    const { email, senha } = request.body

  

    try {
      const novoUsuario = await Usuario.create({ email, senha })
      return response.status(201).json(novoUsuario)
    } catch (error) {
      console.error('Erro ao criar usuário:', error.message)
      return response.status(500).json({ error: 'Erro do servidor' })
    }
  }

  async update(request, response) {
    const {nome, email, senha, senha_antiga } = request.body
    const usuario_id = request.usuario.id

    try {
      const usuario = await User.findByPk(usuario_id)

      if (!usuario) {
        throw new AppError('Usuário não encontrado.')
      }

      if (email !== usuario.email) {
        const checkIfEmailExists = await User.findOne({ where: { email } })
        if (checkIfEmailExists) {
          throw new AppError('Este email já está em uso.')
        }
      }

      usuario.nome = nome ?? usuario.nome
      usuario.email = email ?? usuario.email
      usuario.senha = senha ?? usuario.senha

      if (senha && senha_antiga) {
        const checarSenha = await compare(senha_antiga, usuario.senha)
        if (!checarSenha) {
          throw new AppError('A senha antiga está inválida.')
        }
        usuario.senha = await hash(senha, 8)
      }

      await usuario.save()

      return response.json(usuario)
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error.message)
      return response.status(500).json({ error: 'Erro do servidor' })
    }
  }
}

module.exports = CadastroController
