// @flow

require('dotenv/config')
const readEnv = require('read-env').default

module.exports = readEnv({ transformKey: false })
