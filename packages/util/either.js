const isEqual = require('lodash.isequal')

const either = (value, ...comparisons) => {
  if (!comparisons.length) {
    throw Error('either takes at least a second argument')
  }
  return comparisons.some(x => isEqual(x, value))
}

module.exports = either
