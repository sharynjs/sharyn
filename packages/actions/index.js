const action = (type, payload, meta) => {
  if (!type) {
    throw Error('Actions must have a type')
  }
  const result = { type }
  if (payload) {
    result.payload = payload
  }
  if (meta) {
    result.meta = meta
  }
  return result
}

const errorAction = (type = 'error', payload, meta) => {
  const result = action(type, payload, meta)
  result.error = true
  return result
}

module.exports = { action, errorAction }
