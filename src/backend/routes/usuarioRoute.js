const express = require('express')
const usuarioRoute = express.Router()
const CadastroController = require('../controllers/cadastroController')

const cadastroController = new CadastroController()

// Rota para criar um usuário
usuarioRoute.post('/', cadastroController.create)

// Rota para atualizar um usuário
usuarioRoute.put('/:id', cadastroController.update)

// Rota para deletar um usuário
usuarioRoute.delete('/:id', cadastroController.delete)



module.exports = usuarioRoute
