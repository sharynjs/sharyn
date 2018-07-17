const fs = require('fs')
const { DATABASE_URL } = require('@sharyn/env')

const config = {
  client: 'pg',
  connection: DATABASE_URL,
  migrations: { directory: './src/_db/migrations' },
}

const seedsPath = './src/_db/seeds'
if (fs.existsSync(seedsPath)) {
  config.seeds = { directory: seedsPath }
}

module.exports = config
