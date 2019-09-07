const cycle = require('./cycle')

test('cycle', () => {
  expect(() => cycle()).toThrow()
  expect(() => cycle(1)).toThrow()
  expect(() => cycle(1, 2)).toThrow()

  expect(cycle(1, 1, 2)).toBe(2)
  expect(cycle(2, 1, 2)).toBe(1)
  expect(cycle('something else', 1, 2)).toBe(1)

  expect(cycle(1, 1, 2, 3)).toBe(2)
  expect(cycle(2, 1, 2, 3)).toBe(3)
  expect(cycle(3, 1, 2, 3)).toBe(1)
  expect(cycle('something else', 1, 2, 3)).toBe(1)

  expect(cycle({ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 })).toEqual({ a: 2 })
  expect(cycle({ a: 2 }, { a: 1 }, { a: 2 }, { a: 3 })).toEqual({ a: 3 })
  expect(cycle({ a: 3 }, { a: 1 }, { a: 2 }, { a: 3 })).toEqual({ a: 1 })
})
