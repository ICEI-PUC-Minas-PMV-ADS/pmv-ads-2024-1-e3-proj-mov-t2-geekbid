const path = require("path");

import express from 'express';

const sequelize = require('./utils/database');

const StatusUsuario = require('./models/statusUsuarioModel');
const Usuario = require('./models/usuarioModel');
const Endereco = require('./models/enderecoModel');
const CategoriaProduto = require('./models/categoriaProdutoModel');
const EstadoProduto = require('./models/estadoProdutoModel');
const Produto = require('./models/produtoModel');
const StatusLeilao = require('./models/statusLeilaoModel');
const Leilao = require('./models/leilaoModel');
const Lance = require('./models/lanceModel');
const Mensagem = require('./models/mensagemModel');
const StatusMensagem = require('./models/statusMensagemModel');
const HistoricoMensagem = require('./models/historicoMensagemModel');

// SUBSTITUIDO PELA LINHA 05 => const sequelize = require('./utils/database');
// postgresql(async connection => {
//   await connection.query(
//     'CREATE TABLE IF NOT EXISTS leilao (id bigserial primary key, titulo text, valor float);'
//   )
//   await connection.query(
//     'CREATE UNIQUE INDEX IF NOT EXISTS titulo ON leilao (titulo);'
//   )

//   const leiloes = [
//     {
//       titulo: 'Processador Intel',
//       valor: 40
//     },
//     { titulo: 'Placa de video nvidia', valor: 20 },
//     { titulo: 'Pendrive 4gb', valor: 30 }
//   ]

//   for (let i = 0; i < leiloes.length; i += 1) {
//     const leilao = leiloes[i]
//     await connection.query(
//       `INSERT INTO leilao (titulo, valor) VALUES ('${leilao.titulo}', '${leilao.valor}') ON CONFLICT DO NOTHING;`
//     )
//   }

//   console.log('PostgreSQL database seeded!')
// })

const app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  Usuario.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

const usuarioRoute = require('./routes/usuarioRoute');

// MOVER PARA AS ROUTES
// app.get('/leilao', async (req, res) => {
//   const rows = await process.postgresql.query('SELECT * FROM leilao')
//   res.status(200).send(JSON.stringify(rows))
// })


// RELAÇÕES - COMENTADAS PORQUE AINDA NÃO ESTÃO FINALIZADAS

// Usuario.hasOne(StatusUsuario);
// StatusUsuario.belongsTo(Usuario);

// Usuario.hasOne(Endereco);
// Endereco.belongsTo(Usuario);

// Usuario.hasMany(Leilao);
// Leilao.belongsTo(Usuario);

// Usuario.hasMany(Leilao);
// Leilao.hasMany(Usuario);

// Produto.hasMany(CategoriaProduto);
// CategoriaProduto.belongsTo(Produto);

// Produto.hasOne(EstadoProduto);
// EstadoProduto.belongsTo(Produto);

// Leilao.hasOne(StatusLeilao);
// StatusLeilao.belongsTo(Leilao);

// Leilao.hasMany(Lance);
// Lance.hasMany(Leilao)

app.listen(3000, () => {
  console.log('App running at http://localhost:3000')
})

sequelize
  .sync({ force: true }) // PARA ATUALIZAR AS TABELAS E RELAÇÕES -- APAGA OS DADOS
  // .sync() // DESABILITAR QUANTO HABILITAR A LLINHA DE CIMA
  .then(result => {
    return Usuario.findByPk(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return Usuario.create({ name: 'Teste', email: 'teste@teste.com' });
    }
    return user;
  })
  .then(user => {
    app.listen(3000, () => console.log("Server is running at port 3000...."));
  })
  .catch(err => {
    console.log(err);
  });
