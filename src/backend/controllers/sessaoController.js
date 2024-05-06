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
      return response.json('Erro da porra')
    }


    if (senha != usuario.senha) {
      return response.json('Erro esquisito que nao tenho a minima ideia')
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
