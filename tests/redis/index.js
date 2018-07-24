import redis from '../../packages/redis'

if (typeof redis.getAsync !== 'function') {
  throw Error('Redis client does not have getAsync attached to it')
}

redis.end()
