const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Rota para buscar todas as categorias
router.get('/', categoriaController.buscarCategorias);

module.exports = router;
