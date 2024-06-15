const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const sequelize = require('./utils/database')

const Usuario = require('./models/usuarioModel')
const Endereco = require('./models/enderecoModel')
const Produto = require('./models/produtoModel')
const Leilao = require('./models/leilaoModel')
const Lance = require('./models/lanceModel')
const Mensagem = require('./models/mensagemModel')
const HistoricoMensagem = require('./models/historicoMensagemModel')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

const loginRoute = require('./routes/loginRoute')
const usuarioRoute = require('./routes/usuarioRoute')
const produtoRoute = require('./routes/produtoRoute')
const leilaoRoute = require('./routes/leilaoRoute')
const lanceRoute = require('./routes/lanceRoute')
const sessaoRoute = require('./routes/sessaoRoute')

app.use('/login', loginRoute)
app.use('/usuario', usuarioRoute)
app.use('/produto', produtoRoute)
app.use('/leilao', leilaoRoute)
app.use('/lances', lanceRoute)
app.use('/sessao', sessaoRoute)

// RELAÇÕES - COMENTADAS PORQUE AINDA NÃO ESTÃO FINALIZADAS

Usuario.hasOne(Endereco)

Produto.hasOne(Leilao)

Usuario.hasMany(Leilao)

Usuario.belongsToMany(Leilao, { through: Lance })

Mensagem.belongsToMany(Usuario, { through: HistoricoMensagem })

sequelize
  // .sync({ force: true }) // PARA CRIAR AS TABELAS E RELAÇÕES -- APAGA OS DADOS
  // .sync({ alter: true }) // PARA ATUALIZAR AS TABELAS E RELAÇÕES -- NÃO APAGA OS DADOS
  .sync() // DESABILITAR QUANTO HABILITAR A LLINHA DE CIMA
  .then(user => {
    app.listen(3000, () => console.log('Server is running at port 3000....'))
  })
  .catch(err => console.log(err))
