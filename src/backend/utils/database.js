// npm install --save sequelize
// npm install --save pg pg-hstore # Postgres

const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres', 'geekbid', 'puc-ads-1234', {
  dialect: 'postgres',
  host: 'geekbid.postgres.database.azure.com'
})

module.exports = sequelize
