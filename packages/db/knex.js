const Knex = require('knex')
const exitHook = require('async-exit-hook')

let knexConfig = require('./knex-config')
// eslint-disable-next-line import/no-unresolved
const customKnexConfig = require('../../../src/_db/knex-config')

if (customKnexConfig) {
  knexConfig = customKnexConfig
}

const knex = Knex(knexConfig)

// eslint-disable-next-line no-console
knex.raw('').catch(err => console.error(err))

exitHook(async callback => {
  await knex.destroy()
  callback()
})

module.exports = knex
