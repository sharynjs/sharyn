// @flow

const fs = require('fs')

const pathToSharynKnexConfig = 'node_modules/@sharyn/db/knex-config.js'
const pathToCustomKnexConfig = 'src/_db/knex-config.js'
const hasSharynKnexConfig = fs.existsSync(pathToSharynKnexConfig)
const hasCustomKnexConfig = fs.existsSync(pathToCustomKnexConfig)
let knexConfigPath
if (hasSharynKnexConfig) {
  knexConfigPath = pathToSharynKnexConfig
}
if (hasCustomKnexConfig) {
  knexConfigPath = pathToCustomKnexConfig
}

exports.knexConfigPath = knexConfigPath
