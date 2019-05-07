// @flow

import exitHook from 'async-exit-hook'
import { promisifyAll } from 'bluebird'
import Redis from 'redis'

import { NODE_ENV, REDIS_URL, TEST_REDIS_URL } from '../env'

promisifyAll(Redis)

const DEFAULT_REDIS_URL = 'redis://localhost:8379'
const DEFAULT_TEST_REDIS_URL = 'redis://localhost:8380'

const redis = Redis.createClient(
  NODE_ENV === 'test' ? TEST_REDIS_URL || DEFAULT_TEST_REDIS_URL : REDIS_URL || DEFAULT_REDIS_URL,
)

// eslint-disable-next-line no-console
redis.on('error', err => console.error(err))

exitHook(async callback => {
  await redis.quit()
  callback()
})

module.exports = redis
