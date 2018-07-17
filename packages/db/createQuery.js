module.exports = (knex, tableName) => (userId, trx) => {
  if (typeof tableName !== 'string') {
    throw Error('tableName must be a string')
  }
  const table = trx ? trx(tableName) : knex(tableName)
  return userId ? table.where(`${tableName}.userId`, userId) : table
}
