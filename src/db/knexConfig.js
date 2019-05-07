// @flow

import { hasPackage, hasFile } from '../check-setup'
import { NODE_ENV, DATABASE_URL, TEST_DATABASE_URL } from '../env'

const DEFAULT_DATABASE_URL = 'postgres://postgres@localhost:8432/postgres'
const DEFAULT_TEST_DATABASE_URL = 'postgres://postgres@localhost:8433/postgres'

const knexConfig: Object = {
  connection:
    NODE_ENV === 'test'
      ? TEST_DATABASE_URL || DEFAULT_TEST_DATABASE_URL
      : DATABASE_URL || DEFAULT_DATABASE_URL,
  migrations: { directory: './src/_db/migrations' },
}

if (hasPackage('pg')) {
  knexConfig.client = 'pg'
} else if (hasPackage('mysql')) {
  knexConfig.client = 'mysql'
} else if (hasPackage('mysql2')) {
  knexConfig.client = 'mysql2'
} else if (hasPackage('sqlite3')) {
  knexConfig.client = 'sqlite3'
} else if (hasPackage('oracle')) {
  knexConfig.client = 'oracle'
} else if (hasPackage('mssql')) {
  knexConfig.client = 'mssql'
} else {
  throw Error(
    'It seems that no database package is installed (Knex supports `pg`, `mysql`, `mysql2`, `sqlite3`, `oracle`, `mssql`)',
  )
}

const seedsPath = './src/_db/seeds'
if (hasFile(seedsPath)) {
  knexConfig.seeds = { directory: seedsPath }
}

module.exports = knexConfig
