// @flow

import 'dotenv/config'
import readEnv from 'read-env'

import { requireCascadeFromSource } from '../check-setup'

const parsedEnv = readEnv({ transformKey: false })

if (parsedEnv.NODE_ENV === undefined) {
  parsedEnv.NODE_ENV = 'development'
}

if (parsedEnv.ENV_TYPE === undefined) {
  parsedEnv.ENV_TYPE = `local-${parsedEnv.NODE_ENV}`
}

parsedEnv.IS_PROD_ENV = parsedEnv.NODE_ENV === 'production'
parsedEnv.IS_DEV_ENV = parsedEnv.NODE_ENV === 'development'
parsedEnv.IS_TEST_ENV = parsedEnv.NODE_ENV === 'test'

parsedEnv.IS_LOCAL_ENV_TYPE = parsedEnv.ENV_TYPE.startsWith('local-')

const envCheckModule = requireCascadeFromSource(
  '_server/env-check.js',
  '_server/check-env.js',
  '_server/env.js',
  'server/env-check.js',
  'server/check-env.js',
  'server/env.js',
)

envCheckModule && envCheckModule(parsedEnv)

// CommonJS export required to expose the entire object without explicit named exports
module.exports = parsedEnv
