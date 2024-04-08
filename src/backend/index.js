import express from 'express'
import postgresql from './postgresql.js'

postgresql(async connection => {
  await connection.query(
    'CREATE TABLE IF NOT EXISTS leilao (id bigserial primary key, titulo text, valor float);'
  )
  await connection.query(
    'CREATE UNIQUE INDEX IF NOT EXISTS titulo ON leilao (titulo);'
  )

  const leiloes = [
    {
      titulo: 'Processador Intel',
      valor: 40
    },
    { titulo: 'Placa de video nvidia', valor: 20 },
    { titulo: 'Pendrive 4gb', valor: 30 }
  ]

  for (let i = 0; i < leiloes.length; i += 1) {
    const leilao = leiloes[i]
    await connection.query(
      `INSERT INTO leilao (titulo, valor) VALUES ('${leilao.titulo}', '${leilao.valor}') ON CONFLICT DO NOTHING;`
    )
  }

  console.log('PostgreSQL database seeded!')
})

const app = express()

app.get('/leilao', async (req, res) => {
  const rows = await process.postgresql.query('SELECT * FROM leilao')
  res.status(200).send(JSON.stringify(rows))
})

app.listen(3000, () => {
  console.log('App running at http://localhost:3000')
})
