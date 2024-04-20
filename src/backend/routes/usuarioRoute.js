const express = require('express')
const usuarioRoute = express.Router()
const CadastroTesteController = require('../controllers/cadastroTesteController')

const cadastroTesteController = new CadastroTesteController()

// Rota para criar um usuário
usuarioRoute.post('/', cadastroTesteController.create)

// Rota para atualizar um usuário
usuarioRoute.put('/:id', cadastroTesteController.update)

usuarioRoute.delete('/:id', cadastroTesteController.delete)

/*usuarioRoute.post('/', async (req, res) => {
  const { nome, dataNascimento } = req.body
  const usuarioId = req.usuario.id // Supondo que o ID do usuário esteja disponível na sessão
*/

/*try {
    // Atualiza as informações adicionais do usuário no banco de dados
    const usuario = await Usuario.findByPk(usuarioId)
    if (!usuario) {
      throw new AppError('Usuário não encontrado.', 404)
    }
    usuario.nome = nome
    usuario.dataNascimento = dataNascimento
    await usuario.save()

    // Redireciona o usuário para a página principal após o cadastro das informações adicionais
    res.redirect('/') // Redirecione para a página desejada após o cadastro
  } catch (error) {
    console.error('Erro ao cadastrar informações adicionais:', error.message)
    res.status(error.status || 500).json({ error: error.message })
  }
})*/

module.exports = usuarioRoute
