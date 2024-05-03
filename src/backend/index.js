const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./utils/database');

const Usuario = require('./models/usuarioModel');
const Endereco = require('./models/enderecoModel');
const CategoriaProduto = require('./models/categoriaProdutoModel');
const Produto = require('./models/produtoModel');
const ProdutoCategoria = require('./models/produtoCategoriaModel');
const Leilao = require('./models/leilaoModel');
const Lance = require('./models/lanceModel');
const Mensagem = require('./models/mensagemModel');
const HistoricoMensagem = require('./models/historicoMensagemModel');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");next();
});

const loginRoute = require('./routes/loginRoute');
const usuarioRoute = require('./routes/usuarioRoute');
const produtoRoute = require('./routes/produtoRoute');
const leilaoRoute = require('./routes/leilaoRoute');
const categoriaRoute = require('./routes/categoriaRoute');
const lanceRoute = require('./routes/lanceRoute');

app.use('/login', loginRoute);
app.use('/usuario', usuarioRoute);
app.use('/produto', produtoRoute);
app.use('/leilao', leilaoRoute);
app.use('/categorias', categoriaRoute);
app.use('/lances', lanceRoute);


// RELAÇÕES - COMENTADAS PORQUE AINDA NÃO ESTÃO FINALIZADAS

Usuario.hasOne(Endereco);

CategoriaProduto.belongsToMany(Produto, { through: ProdutoCategoria });

Produto.hasOne(Leilao);

Usuario.hasMany(Leilao);

Usuario.belongsToMany(Leilao, { through: Lance });

Mensagem.belongsToMany(Usuario, { through: HistoricoMensagem });

sequelize
   //.sync({ force: true }) // PARA CRIAR AS TABELAS E RELAÇÕES -- APAGA OS DADOS
   .sync({ alter: true }) // PARA ATUALIZAR AS TABELAS E RELAÇÕES -- NÃO APAGA OS DADOS
  // .sync()  DESABILITAR QUANTO HABILITAR A LLINHA DE CIMA
  // .then(result => {
  //   return CategoriaProduto.bulkCreate([
  //     { descricaoCategoriaProduto: 'Quadrinhos e Mangás' },
  //     { descricaoCategoriaProduto: 'Colecionáveis' },
  //     { descricaoCategoriaProduto: 'Jogos de Tabuleiro e Card Games' },
  //     { descricaoCategoriaProduto: 'Jogos Eletrônicos' },
  //     { descricaoCategoriaProduto: 'Livros e Literatura Fantástica' },
  //     { descricaoCategoriaProduto: 'Filmes e Séries' },
  //     { descricaoCategoriaProduto: 'Tecnologia e Gadgets' },
  //     { descricaoCategoriaProduto: 'Roupas e Acessórios' },
  //     { descricaoCategoriaProduto: 'Arte e Decoração' },
  //     { descricaoCategoriaProduto: 'Memorabilia' }
  //   ])
  // })
  .then(user => {
    app.listen(3000, () => console.log('Server is running at port 3000....'))
  })
  .catch(err => console.log(err));
