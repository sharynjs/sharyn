// @flow

import knex from './knex'

const createQuery = (tableName: string) => (userId: string, trx: Function) => {
  if (typeof tableName !== 'string') {
    throw Error('tableName must be a string')
  }
  const table = trx ? trx(tableName) : knex(tableName)
  return userId ? table.where(`${tableName}.userId`, userId) : table
}

module.exports = createQuery
