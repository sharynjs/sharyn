// @flow

import Knex from 'knex'
import exitHook from 'async-exit-hook'

import { appRoot, hasFile } from '../check-setup'
import { IS_TEST_ENV } from '../env'

import baseConfig from './knexConfig'

let customConfig = {}
if (hasFile('src/_db/knex-config.js')) {
  // eslint-disable-next-line import/no-unresolved, global-require, import/no-dynamic-require, flow-disable-next-line
  customConfig = require(`${appRoot}/src/_db/knex-config`)
}

const knex = Knex(Object.assign({}, baseConfig, customConfig))

// This call is useful to test the connecion. In test this async call doesn't have time to resolve.
if (!IS_TEST_ENV) {
  // eslint-disable-next-line no-console
  knex.raw('').catch(err => console.error(err))
}

exitHook(async callback => {
  await knex.destroy()
  callback()
})

module.exports = knex
