/* eslint-disable global-require, import/no-unresolved */

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

require('dotenv/config')
const { hasFile } = require('@sharyn/check-setup')
const readEnv = require('read-env').default

const parsedEnv = readEnv({ transformKey: false })

parsedEnv.IS_PROD_ENV = parsedEnv.NODE_ENV === 'production'
parsedEnv.IS_DEV_ENV = parsedEnv.NODE_ENV === 'development'
parsedEnv.IS_TEST_ENV = parsedEnv.NODE_ENV === 'test'

if (hasFile('.env-check.js')) {
  require('../../../.env-check')(parsedEnv)
}

module.exports = parsedEnv
