const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota para criar um usuário
router.post('/', usuarioController.cadastrarUsuario);

// Rota para atualizar um usuário
router.put('/:id', usuarioController.atualizarUsuario);

// Rota para deletar um usuário
router.delete('/:id', usuarioController.excluirUsuario);

// Rota para consultar um usuário
router.get('/:id', usuarioController.buscarUsuario);


module.exports = router;
