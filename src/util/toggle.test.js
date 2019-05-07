import toggle from './toggle'

const strictModeErrorMessage = 'The value of toggle() does not match any option (strict mode)'
const invalidValueErrorMessage = 'Invalid value passed to toggle()'
const notEnoughParamsErrorMessage =
  "You must pass at least 3 values to toggle. Example: toggle(color, 'red', 'blue')"

test('toggle', () => {
  expect(() => toggle()).toThrow(notEnoughParamsErrorMessage)
  expect(() => toggle(undefined, 1, 2, true)).toThrow(strictModeErrorMessage)
  expect(() => toggle(null, 1, 2, true)).toThrow(strictModeErrorMessage)
  expect(() => toggle(3, 1, 2, true)).toThrow(strictModeErrorMessage)

  // Normal use cases
  expect(toggle(1, 1, 2)).toBe(2)
  expect(toggle(2, 1, 2)).toBe(1)
  expect(toggle(undefined, 1, 2)).toBe(1)
  expect(toggle(null, 1, 2)).toBe(1)

  expect(() => toggle(3, 1, 2)).toThrow(invalidValueErrorMessage)
})
