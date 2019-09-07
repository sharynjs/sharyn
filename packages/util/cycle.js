const cycleCore = require('./_cycleCore')

const cycle = (currentValue, ...values) => {
  if (values.length < 2) {
    throw Error(
      "cycle takes at least 3 parameters. Example: cycle(color, 'yellow', 'orange', 'red')"
    )
  }
  return cycleCore(currentValue, ...values)
}

module.exports = cycle
