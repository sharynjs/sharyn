const between = (value, bound1, bound2, option, ...args) => {
  if (bound1 === undefined || bound2 === undefined || args.length > 0) {
    throw Error(
      "between takes 3 or 4 parameters. Example: between(x, 10, 100, 'exclude')"
    )
  }
  let lowerBound
  let upperBound
  if (bound1 <= bound2) {
    lowerBound = bound1
    upperBound = bound2
  } else {
    lowerBound = bound2
    upperBound = bound1
  }
  return option === 'exclude'
    ? lowerBound < value && value < upperBound
    : option === 'exclude-lower'
    ? lowerBound < value && value <= upperBound
    : option === 'exclude-upper'
    ? lowerBound <= value && value < upperBound
    : lowerBound <= value && value <= upperBound
}

module.exports = between
