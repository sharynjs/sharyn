// This is duplicated between cycle and toggle
const isEqual = require('lodash.isequal')

const cycleCore = (currentValue, ...values) => {
  const cycleValues = Array.isArray(values[0]) ? values[0] : values
  const currentIndex = cycleValues.findIndex(x => isEqual(x, currentValue))
  const newIndex = currentIndex === cycleValues.length - 1 ? 0 : currentIndex + 1
  return cycleValues[newIndex]
}

const toggle = (currentValue, ...values) => {
  if (values.length !== 2) {
    throw new Error("toggle takes 3 parameters. Example: toggle(color, 'red', 'blue')")
  }
  return cycleCore(currentValue, ...values)
}

module.exports = toggle
