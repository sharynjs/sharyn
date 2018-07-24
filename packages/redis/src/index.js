// @flow

import { promisifyAll } from 'bluebird'
import Redis from 'redis'
import exitHook from 'async-exit-hook'

// flow-disable-next-line
import { REDIS_URL } from '@sharyn/env'

promisifyAll(Redis)

const redis = Redis.createClient(REDIS_URL)

// eslint-disable-next-line no-console
redis.on('error', err => console.error(err))

exitHook(async callback => {
  await redis.quit()
  callback()
})

module.exports = redis
