// @flow

require('dotenv/config')
const readEnv = require('read-env')

const env = readEnv({ transformKey: false })
env.IS_PROD = env.NODE_ENV === 'production'

module.exports = env
