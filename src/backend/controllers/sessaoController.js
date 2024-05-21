const Usuario = require('../models/usuarioModel')
const { compare } = require('bcryptjs')

const authConfig = require('../configs/auth')
const { sign } = require('jsonwebtoken')

class sessaoController {
  async create(request, response) {
    const { email, senha } = request.body

    // Busca o usuário no banco de dados usando o Sequelize
    const usuario = await Usuario.findOne({ where: { email } })
    if (!usuario) {
      return response.json('Email e/ou senha inválido(s).', 401)
    }

    if (senha != usuario.senha) {
      return response.json('Senha inválida.', 401)
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({}, secret, {
      subject: String(usuario.id),
      expiresIn
    })

    return response.json({ usuario, token })
  }
}

module.exports = sessaoController
