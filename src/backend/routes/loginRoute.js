const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')
const garantirAutenticacao = require('../middlewares/garantirAutenticacao')

router.post('/login', garantirAutenticacao, loginController.fazerLogin)

module.exports = router
