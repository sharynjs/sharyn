const between = require('./between')

test('between', () => {
  expect(() => between()).toThrow()
  expect(() => between(1)).toThrow()
  expect(() => between(1, 2)).toThrow()
  expect(() => between(1, 2, 3, 4, 5)).toThrow()

  expect(between(50, 10, 100)).toBe(true)
  expect(between(10, 10, 100)).toBe(true)
  expect(between(100, 10, 100)).toBe(true)

  expect(between(10, 10, 100, 'exclude-lower')).toBe(false)
  expect(between(100, 10, 100, 'exclude-upper')).toBe(false)
  expect(between(10, 10, 100, 'exclude')).toBe(false)
  expect(between(100, 10, 100, 'exclude')).toBe(false)
})
