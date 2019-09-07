const defined = require('./defined')

test('defined', () => {
  expect(defined(undefined)).toBe(false)
  expect(defined(void 0)).toBe(false)
  expect(defined(null)).toBe(true)
  expect(defined(0)).toBe(true)
  expect(defined('')).toBe(true)
  expect(defined(NaN)).toBe(true)
})
