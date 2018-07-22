// @flow

/* eslint-disable global-require, import/no-unresolved */

import 'dotenv/config'
import readEnv from 'read-env'
// flow-disable-next-line
import { hasFile } from '@sharyn/check-setup'

const parsedEnv = readEnv({ transformKey: false })

if (parsedEnv.NODE_ENV === undefined) {
  parsedEnv.NODE_ENV = 'development'
}

parsedEnv.IS_PROD_ENV = parsedEnv.NODE_ENV === 'production'
parsedEnv.IS_DEV_ENV = parsedEnv.NODE_ENV === 'development'
parsedEnv.IS_TEST_ENV = parsedEnv.NODE_ENV === 'test'

if (hasFile('src/_server/env-check.js')) {
  // flow-disable-next-line
  require('../../../src/_server/env-check.js')(parsedEnv)
}

// CommonJS export required to expose the entire object without explicit named exports
module.exports = parsedEnv
