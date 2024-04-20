const path = require('path')

const express = require('express')

const sequelize = require('./utils/database')

const StatusUsuario = require('./models/statusUsuarioModel')
const Usuario = require('./models/usuarioModel')
const Endereco = require('./models/enderecoModel')
const CategoriaProduto = require('./models/categoriaProdutoModel')
const EstadoProduto = require('./models/estadoProdutoModel')
const Produto = require('./models/produtoModel')
const ProdutoCategoria = require('./models/produtoCategoriaModel')
const StatusLeilao = require('./models/statusLeilaoModel')
const Leilao = require('./models/leilaoModel')
const Lance = require('./models/lanceModel')
const Mensagem = require('./models/mensagemModel')
const StatusMensagem = require('./models/statusMensagemModel')
const HistoricoMensagem = require('./models/historicoMensagemModel')

const app = express()
app.use(express.json())

const usuarioRoute = require('./routes/usuarioRoute')
app.use("/usuario", usuarioRoute)

app.get('/cadastro-informacoes-adicionais', (req, res) => {
  res.render('cadastro-informacoes-adicionais') // Renderize a página com o formulário de cadastro de informações adicionais
})

const { request } = require('http')

// MOVER PARA AS ROUTES
// app.get('/leilao', async (req, res) => {
//   const rows = await process.postgresql.query('SELECT * FROM leilao')
//   res.status(200).send(JSON.stringify(rows))
// })

// RELAÇÕES - COMENTADAS PORQUE AINDA NÃO ESTÃO FINALIZADAS

StatusUsuario.hasMany(Usuario)

Usuario.hasOne(Endereco)

Usuario.hasMany(Leilao)

CategoriaProduto.belongsToMany(Produto, { through: ProdutoCategoria })

EstadoProduto.hasMany(Produto)

StatusLeilao.hasMany(Leilao)

Produto.hasOne(Leilao)

Usuario.belongsToMany(Leilao, { through: Lance })

Mensagem.belongsToMany(StatusMensagem, { through: HistoricoMensagem })

sequelize
  .sync({ force: true }) // PARA CRIAR AS TABELAS E RELAÇÕES -- APAGA OS DADOS
  // .sync({ alter: true }) // PARA ATUALIZAR AS TABELAS E RELAÇÕES -- NÃO APAGA OS DADOS
  // .sync() // DESABILITAR QUANTO HABILITAR A LLINHA DE CIMA
  .then(result => {
    return StatusUsuario.bulkCreate([
      { descricaoStatusUsuario: 'cadastrado' },
      { descricaoStatusUsuario: 'validado' }
    ])
  })
  .then(result => {
    return EstadoProduto.bulkCreate([
      { descricaoEstadoProduto: 'novo' },
      { descricaoEstadoProduto: 'usado' }
    ])
  })
  .then(result => {
    return StatusMensagem.bulkCreate([
      { descricaoStatusMensagem: 'enviada' },
      { descricaoStatusMensagem: 'excluida' },
      { descricaoStatusMensagem: 'lida' }
    ])
  })
  .then(result => {
    return StatusLeilao.bulkCreate([
      { descricaoStatusLeilao: 'cadastrado' },
      { descricaoStatusLeilao: 'publicado' },
      { descricaoStatusLeilao: 'ativo' },
      { descricaoStatusLeilao: 'encerrado' },
      { descricaoStatusLeilao: 'cancelado' }
    ])
  })
  .then(result => {
    return CategoriaProduto.bulkCreate([
      { descricaoCategoriaProduto: 'Quadrinhos e Mangás' },
      { descricaoCategoriaProduto: 'Colecionáveis' },
      { descricaoCategoriaProduto: 'Jogos de Tabuleiro e Card Games' },
      { descricaoCategoriaProduto: 'Jogos Eletrônicos' },
      { descricaoCategoriaProduto: 'Livros e Literatura Fantástica' },
      { descricaoCategoriaProduto: 'Filmes e Séries' },
      { descricaoCategoriaProduto: 'Tecnologia e Gadgets' },
      { descricaoCategoriaProduto: 'Roupas e Acessórios' },
      { descricaoCategoriaProduto: 'Arte e Decoração' },
      { descricaoCategoriaProduto: 'Memorabilia' }
    ])
  })
  .then(user => {
    app.listen(3000, () => console.log('Server is running at port 3000....'))
  })
  .catch(err => console.log(err))
