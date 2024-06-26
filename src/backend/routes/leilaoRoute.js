const express = require('express');
const router = express.Router();
const leilaoController = require('../controllers/leilaoController');

// Rota para cadastrar um novo leilão com produto e categoria
router.post('/', leilaoController.cadastrarLeilao);

// Rota para buscar todos os leilões
router.get('/', leilaoController.listarLeiloes);

// Rota para buscar todos os leilões
router.get('/home', leilaoController.listarLeiloesHome);

// Rota para pesquisar leilões 
router.get('/pesquisa', leilaoController.pesquisarLeilaoHome);

// Rota para buscar todos os leilões - meusLeiloes
router.get('/meusleiloes', leilaoController.listarMeusLeiloes);

// Rota para buscar um leilão por ID
router.get('/:id', leilaoController.listarLeilao);

// Rota para atualizar um leilão por ID
router.put('/:id', leilaoController.atualizarLeilao);

// Rota para excluir um leilão por ID
router.delete('/:id', leilaoController.excluirLeilao);

// Rota para atualizar status de leilões expirados
router.put('/atualizar-status-leiloes', (req, res, next) => {
    console.log("Rota /atualizar-status-leiloes chamada");
    next();
  }, leilaoController.atualizarStatusLeiloes);
  

module.exports = router;