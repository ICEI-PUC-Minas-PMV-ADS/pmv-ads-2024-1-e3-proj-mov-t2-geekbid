const express = require('express')
const router = express.Router()

const sessaoController = require('../controllers/sessaoController')
const SessaoController = new sessaoController()

const sessaoRoute = router
sessaoRoute.post('/', SessaoController.create)

module.exports = sessaoRoute
