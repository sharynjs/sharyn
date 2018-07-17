module.exports = (knex, t) => {
  t.uuid('id').primary()
  t.timestamp('createdAt')
    .notNullable()
    .defaultTo(knex.fn.now())
  t.timestamp('updatedAt')
    .notNullable()
    .defaultTo(knex.fn.now())
}
