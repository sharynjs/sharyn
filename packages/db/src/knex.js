// @flow

import Knex from 'knex'
import exitHook from 'async-exit-hook'
// flow-disable-next-line
import { hasFile } from '@sharyn/check-setup'
import { IS_TEST_ENV } from '@sharyn/env'
import providedKnexConfig from './knex-config'

let customKnexConfig
if (hasFile('src/_db/knex-config.js')) {
  // eslint-disable-next-line import/no-unresolved, global-require, flow-disable-next-line
  customKnexConfig = require('../../../src/_db/knex-config')
}

const knex = Knex(customKnexConfig || providedKnexConfig)

// This call is useful to test the connecion. In test this async call doesn't have time to resolve.
if (!IS_TEST_ENV) {
  // eslint-disable-next-line no-console
  knex.raw('').catch(err => console.error(err))
}

exitHook(async callback => {
  await knex.destroy()
  callback()
})

export default knex
