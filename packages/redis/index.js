// @flow

const { promisifyAll } = require('bluebird')
const Redis = require('redis')
const exitHook = require('async-exit-hook')

const { REDIS_URL } = require('@sharyn/env')

promisifyAll(Redis)

const redis = Redis.createClient(REDIS_URL)

// eslint-disable-next-line no-console
redis.on('error', err => console.error(err))

exitHook(async callback => {
  await redis.quit()
  callback()
})

module.exports = redis
