// @flow

// flow-disable-next-line
import { hasFile } from '@sharyn/check-setup'

const pathToSharynKnexConfig = 'node_modules/@sharyn/db/knex-config.js'
const pathToCustomKnexConfig = 'src/_db/knex-config.js'
const hasSharynKnexConfig = hasFile(pathToSharynKnexConfig)
const hasCustomKnexConfig = hasFile(pathToCustomKnexConfig)

let knexConfigPath_
if (hasSharynKnexConfig) {
  knexConfigPath_ = pathToSharynKnexConfig
}
if (hasCustomKnexConfig) {
  knexConfigPath_ = pathToCustomKnexConfig
}

export const knexConfigPath = knexConfigPath_
