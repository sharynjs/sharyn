const cycleCore = require('./_cycleCore')

const toggle = (currentValue, ...values) => {
  if (values.length !== 2) {
    throw new Error(
      "toggle takes 3 parameters. Example: toggle(color, 'red', 'blue')"
    )
  }
  return cycleCore(currentValue, ...values)
}

module.exports = toggle
