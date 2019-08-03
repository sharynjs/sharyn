import toString from './toString'

test('toString', () => {
  expect(toString(undefined)).toBe(undefined)
  expect(toString(null)).toBe(null)
  expect(toString('')).toBe('')
  expect(toString('abc')).toBe('abc')
  expect(toString(true)).toBe('true')
  expect(toString(123)).toBe('123')
  expect(toString(1.23)).toBe('1.23')
  expect(toString(-1)).toBe('-1')
})
