/* eslint-disable global-require, import/no-unresolved */

require('dotenv/config')
const { hasFile } = require('@sharyn/check-setup')
const readEnv = require('read-env').default

const parsedEnv = readEnv({ transformKey: false })

if (hasFile('.env-check.js')) {
  require('../../../.env-check')(parsedEnv)
}

module.exports = parsedEnv
