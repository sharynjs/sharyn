import redis from '../../packages/redis'

if (redis.address === 'localhost:8379') {
  throw Error('Did not override default Redis URL properly')
}

if (typeof redis.getAsync !== 'function') {
  throw Error('Redis client does not have getAsync attached to it')
}

redis.end()
