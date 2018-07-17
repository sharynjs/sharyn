const { DATABASE_URL } = require('@sharyn/env')

module.exports = {
  client: 'pg',
  connection: DATABASE_URL,
  migrations: { directory: './src/_db/migrations' },
  seeds: { directory: './src/_db/seeds' },
}
