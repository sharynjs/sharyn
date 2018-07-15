// @flow

require('dotenv/config')
const readEnv = require('read-env').default

const env = readEnv({ transformKey: false })
env.IS_PROD = env.NODE_ENV === 'production'

module.exports = env
