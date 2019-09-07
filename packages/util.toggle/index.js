// This is duplicated between cycle and toggle
const isEqual = require('lodash.isequal')

const cycleCore = (currentValue, ...values) => {
  const cycleValues = Array.isArray(values[0]) ? values[0] : values
  const currentIndex = cycleValues.findIndex(x => isEqual(x, currentValue))
  const newIndex = currentIndex === cycleValues.length - 1 ? 0 : currentIndex + 1
  return cycleValues[newIndex]
}

/**
 * Toggles between two values, and defaults to the first one.
 * @parentpackage util
 * @param {any} currentValue The current value.
 * @param {any} firstValue The first value.
 * @param {any} secondValue The second value.
 * @returns {any} The other option.
 * @example
 * ```js
 * toggle(current, 'a', 'b') // if current === 'a', returns 'b'
 * toggle(current, 'a', 'b') // if current === 'b', returns 'a'
 * toggle(current, 'a', 'b') // if current === 'x', returns 'a'
 * ```
 *
 * Deep equality is supported:
 *
 * ```js
 * cycle({ a: 1 }, { a: 1 }, { a: 2 }) // { a: 2 }
 * ```
 */
const toggle = (currentValue, ...values) => {
  if (values.length !== 2) {
    throw new Error("toggle takes 3 parameters. Example: toggle(color, 'red', 'blue')")
  }
  return cycleCore(currentValue, ...values)
}

module.exports = toggle
