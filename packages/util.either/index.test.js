const either = require('./either')

test('either', () => {
  expect(either(1, 1)).toBe(true)
  expect(either(1, 1, 2)).toBe(true)
  expect(either(2, 1, 2)).toBe(true)
  expect(either(3, 1, 2)).toBe(false)
  expect(either({ a: 2 }, { a: 1 }, { a: 2 })).toBe(true)
  expect(either({ a: 3 }, { a: 1 }, { a: 2 })).toBe(false)
  expect(() => either(1)).toThrow()
})
