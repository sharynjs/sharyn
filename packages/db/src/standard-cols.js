// @flow

const standardCols = (knex: Function, t: Object) => {
  t.uuid('id').primary()
  t.timestamp('createdAt')
    .notNullable()
    .defaultTo(knex.fn.now())
  t.timestamp('updatedAt')
    .notNullable()
    .defaultTo(knex.fn.now())
}

export default standardCols
