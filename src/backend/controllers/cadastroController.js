const app = require('express')
const router = app.Router()
const Usuario = require('../models/usuarioModel')
const AppError = require('../utils/AppError')
const transporter = require('./emailController')

class CadastroController {
  async create(request, response) {
    const { nome, email, senha } = request.body

    try {
      // Verifica se o email já está em uso
      const usuarioExistente = await Usuario.findOne({ where: { email } })
      if (usuarioExistente) {
        throw new AppError('Este email já está em uso.', 400)
      }
      
      const hashedSenha = await bcrypt.hash(senha, 10)

      // Cria o usuário
      const novoUsuario = await Usuario.create({
        nome,
        email,
        senha: hashedSenha
      })

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

  async update(req, res) {
    try {
      const { id } = req.params
      const { nome, email, senha } = req.body

      const [updatedRowsCount, [updateUsuario]] = await Usuario.update(
        { nome, email, senha },
        { where: { id }, returning: true }
      )

      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
      }

      res.json(updateUsuario)
    } catch (error) {
      console.error('Erro ao atualizar cadastro de usuário:', error.message)
      res.status(500).json({ error: 'Erro do servidor' })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      const deletedRowsCount = await Usuario.destroy({ where: { id } })

      if (deletedRowsCount === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
      }

      res.json({ message: 'Usuário excluído com sucesso' })
    } catch (error) {
      console.error('Erro ao excluir cadastro de usuário:', error.message)
      res.status(500).json({ error: 'Erro do servidor' })
    }
  }
}

module.exports = CadastroController
