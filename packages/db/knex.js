const fs = require('fs')
const Knex = require('knex')
const exitHook = require('async-exit-hook')
const { NODE_ENV } = require('@sharyn/env')

let knexConfig = require('./knex-config')

let customKnexConfig
if (fs.existsSync('src/_db/knex-config.js')) {
  // eslint-disable-next-line import/no-unresolved, global-require
  customKnexConfig = require('../../../src/_db/knex-config')
}

if (customKnexConfig) {
  knexConfig = customKnexConfig
}

const knex = Knex(knexConfig)

// This call is useful to test the connecion. In test this async call doesn't have time to resolve.
if (NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  knex.raw('').catch(err => console.error(err))
}

exitHook(async callback => {
  await knex.destroy()
  callback()
})

module.exports = knex
