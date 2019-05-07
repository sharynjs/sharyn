// @flow

// flow-disable-next-line
import { hasFile, pathCascade } from '@sharyn/check-setup'

const pathToSharynKnexConfig = pathCascade(
  'node_modules/@sharyn/db/knex-config.js',
  'node_modules/sharyn/db/knex-config.js',
)
const pathToCustomKnexConfig = 'src/_db/knex-config.js'
const hasSharynKnexConfig = !!pathToSharynKnexConfig
const hasCustomKnexConfig = hasFile(pathToCustomKnexConfig)

let knexConfigPath_
if (hasSharynKnexConfig) {
  knexConfigPath_ = pathToSharynKnexConfig
}
if (hasCustomKnexConfig) {
  knexConfigPath_ = pathToCustomKnexConfig
}

export const knexConfigPath = knexConfigPath_
