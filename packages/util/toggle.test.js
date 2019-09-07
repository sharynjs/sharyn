const toggle = require('./toggle')

test('toggle', () => {
  expect(() => toggle()).toThrow()
  expect(() => toggle(1)).toThrow()
  expect(() => toggle(1, 2)).toThrow()
  expect(() => toggle(1, 2, 3, 4)).toThrow()

  expect(toggle(1, 1, 2)).toBe(2)
  expect(toggle(2, 1, 2)).toBe(1)
  expect(toggle({ a: 1 }, { a: 1 }, { a: 2 })).toEqual({ a: 2 })
  expect(toggle({ a: 2 }, { a: 1 }, { a: 2 })).toEqual({ a: 1 })
  expect(toggle('something else', 1, 2)).toBe(1)
})
