// @flow

/* eslint-disable import/no-dynamic-require, global-require */

import { promisifyAll } from 'bluebird'
import exitHook from 'async-exit-hook'

// flow-disable-next-line
import { appRoot, hasPackage } from '@sharyn/check-setup'
// flow-disable-next-line
import { REDIS_URL } from '@sharyn/env'
// flow-disable-next-line
const Redis = hasPackage('redis', true) && require(`${appRoot}/node_modules/redis`)

promisifyAll(Redis)

const DEFAULT_REDIS_URL = 'redis://localhost:8379'

const redis = Redis.createClient(REDIS_URL || DEFAULT_REDIS_URL)

// eslint-disable-next-line no-console
redis.on('error', err => console.error(err))

exitHook(async callback => {
  await redis.quit()
  callback()
})

module.exports = redis
