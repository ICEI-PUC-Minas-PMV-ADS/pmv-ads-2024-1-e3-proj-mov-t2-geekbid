const express = require('express')
const usuarioController = require('../controllers/usuarioController')

// Rota para criar um usuário
usuarioRoute.post('/', usuarioController.cadastrarUsuario)

// Rota para atualizar um usuário
usuarioRoute.put('/:id', usuarioController.atualizarUsuario)

// Rota para deletar um usuário
usuarioRoute.delete('/:id', usuarioController.excluirUsuario)

// Rota para consultar um usuário
usuarioRoute.get('/:id', usuarioController.buscarUsuario)


module.exports = usuarioRoute;
