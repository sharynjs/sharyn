// @flow

const toggle = (value, option1, option2, isStrict) => {
  if (option1 === undefined || option2 === undefined) {
    throw new Error(
      "You must pass at least 3 values to toggle. Example: toggle(color, 'red', 'blue')",
    )
  }
  if (value === option1) {
    return option2
  }
  if (value === option2) {
    return option1
  }
  if (isStrict) {
    throw new Error('The value of toggle() does not match any option (strict mode)')
  }
  if (value === null || value === undefined) {
    return option1
  }
  throw new Error('Invalid value passed to toggle()')
}

export default toggle
