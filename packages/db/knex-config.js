const fs = require('fs')
const { NODE_ENV, DATABASE_URL, TEST_DATABASE_URL } = require('@sharyn/env')

const config = {
  client: 'pg',
  connection: NODE_ENV === 'test' ? TEST_DATABASE_URL : DATABASE_URL,
  migrations: { directory: './src/_db/migrations' },
}

const seedsPath = './src/_db/seeds'
if (fs.existsSync(seedsPath)) {
  config.seeds = { directory: seedsPath }
}

module.exports = config
