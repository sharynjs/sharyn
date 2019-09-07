const ifs = require('./ifs')

test('ifs', () => {
  expect(() => ifs()).toThrow()

  expect(ifs([false, 1])).toBe(undefined)
  expect(ifs([false, 1], [false, 2], [false, 3])).toBe(undefined)
  expect(ifs([false, 1], [true, 2], [false, 3])).toBe(2)
  expect(ifs([() => false, 1], [() => true, 2], [() => false, 3])).toBe(2)
  expect(ifs([false, () => 1], [true, () => 2], [false, () => 3])).toBe(2)

  expect(ifs([false, 1], [false, 2], [false, 3], 4)).toBe(4)
  expect(ifs([false, 1], [false, 2], [false, 3], () => 4)).toBe(4)

})
