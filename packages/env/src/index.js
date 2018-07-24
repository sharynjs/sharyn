// @flow

import 'dotenv/config'
import readEnv from 'read-env'
// flow-disable-next-line
import { requireCascade } from '@sharyn/check-setup'

const parsedEnv = readEnv({ transformKey: false })

if (parsedEnv.NODE_ENV === undefined) {
  parsedEnv.NODE_ENV = 'development'
}

parsedEnv.IS_PROD_ENV = parsedEnv.NODE_ENV === 'production'
parsedEnv.IS_DEV_ENV = parsedEnv.NODE_ENV === 'development'
parsedEnv.IS_TEST_ENV = parsedEnv.NODE_ENV === 'test'

const envCheckModule = requireCascade(
  'src/_server/env-check.js',
  'src/_server/check-env.js',
  'src/_server/env.js',
  'src/_server/.env.js',
  'src/_server/.env-check.js',
  'env-check.js',
  'check-env.js',
  'env.js',
  '.env.js',
  '.env-check.js',
)

envCheckModule && envCheckModule(parsedEnv)

// CommonJS export required to expose the entire object without explicit named exports
module.exports = parsedEnv
