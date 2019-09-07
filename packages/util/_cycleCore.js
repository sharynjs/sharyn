const isEqual = require('lodash.isequal')

const cycleCore = (currentValue, ...values) => {
  const cycleValues = Array.isArray(values[0]) ? values[0] : values
  const currentIndex = cycleValues.findIndex(x => isEqual(x, currentValue))
  const newIndex = currentIndex === cycleValues.length -1 ? 0 : currentIndex + 1
  return cycleValues[newIndex]
}

module.exports = cycleCore
