const express = require('express')
const router = express.Router()
const lanceController = require('../controllers/lanceController')

// Retornar ultimos lances de um leilão
router.get('/:leilaoId/ultimos', lanceController.buscarUltimosLances) // Nova rota

// Cadastrar lance em leilão
router.post('/', lanceController.cadastrarLance)

// Retornar todos os lances de um leilão
router.get('/:leilaoId', lanceController.buscarLances)

// Retornar todos os lances de um usuário
 router.get('/user/:userId', lanceController.buscarLancesPorUsuario)

// Retornar os detalhes de um lance específico
router.get('/:id', lanceController.buscarLance)

// Excluir lance
// router.delete('/lances/:id', lanceController.excluirLance);

module.exports = router
