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
  async delete(request, response) {
    try {
      const userId = request.usuario.id
      console.log(userId)
      await Usuario.destroy({ where: { id: userId } })

      return response.status(200).json({ message: 'Usuario deletado.' })
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Unable to delete user', error })
    }
  }
}

module.exports = sessaoController
