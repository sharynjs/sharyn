const exists = require('./exists')

test('exists', () => {
  expect(exists('')).toBe(true)
  expect(exists(0)).toBe(true)
  expect(exists(NaN)).toBe(true)

  expect(exists(null)).toBe(false)
  expect(exists(undefined)).toBe(false)
  expect(exists(void 0)).toBe(false)
})
