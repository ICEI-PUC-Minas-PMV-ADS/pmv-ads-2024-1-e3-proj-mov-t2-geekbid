const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para cadastrar um novo produto
router.post('/', produtoController.cadastrarProduto);

// Rota para buscar todos os produtos
router.get('/', produtoController.buscarProdutos);

// Rota para excluir produto
router.delete('/:id', produtoController.excluirProduto);

module.exports = router;
