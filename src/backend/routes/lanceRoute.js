const express = require('express');
const lanceController = require('../controllers/lanceController');

const router = express.Router();

// Cadastrar lance em leilão
router.post('/', lanceController.cadastrarLance);

// Retornar todos os lances de um leilão
router.get('/:leilaoId', lanceController.buscarLances);

// Retornar os detalhes de um lance específico
router.get('/lance/:id', lanceController.buscarLance);

// Excluir lance
// router.delete('/lances/:id', lanceController.excluirLance);

module.exports = router;
