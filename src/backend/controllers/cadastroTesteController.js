const app = require('express')
const router = app.Router()
const Usuario = require('../models/usuarioModel')
const AppError = require('../utils/AppError')
const transporter = require('../controllers/emailController')

class CadastroTesteController {
  async create(request, response) {
    const { nome, email, senha } = request.body

    try {
      // Verifica se o email já está em uso
      const usuarioExistente = await Usuario.findOne({ where: { email } })
      if (usuarioExistente) {
        throw new AppError('Este email já está em uso.', 400)
      }

      // Cria o usuário
      const novoUsuario = await Usuario.create({ nome, email, senha })

      // Envia e-mail de validação de cadastro
      if (novoUsuario) {
        transporter(email)
      }

      // Redireciona o usuário para a página de cadastro de informações adicionais
      return response.status(201).json({ redirectUrl: '/usuario' })
    } catch (error) {
      console.error('Erro ao criar usuário:', error.message)
      return response.status(error.status || 500).json({ error: error.message })
    }
  }

  async update(request, response) {
    const { nome, email, senha, senha_antiga } = request.body
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

module.exports = CadastroTesteController
