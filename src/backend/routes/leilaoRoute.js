const express = require('express');
const leilaoController = require('../controllers/leilaoController');

// Rota para cadastrar um novo leilão com produto e categoria
router.post('/', leilaoController.cadastrarLeilao);

// Rota para buscar todos os leilões
router.get('/', leilaoController.listarLeiloes);

// Rota para buscar um leilão por ID
router.get('/:id', leilaoController.listarLeilao);

// Rota para atualizar um leilão por ID
router.put('/:id', leilaoController.atualizarLeilao);

// Rota para excluir um leilão por ID
router.delete('/:id', leilaoController.excluirLeilao);

module.exports = router;