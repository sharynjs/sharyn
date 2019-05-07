import swit from './swit'

test('swit', () => {
  expect(swit(3, [])).toBe(undefined)
  expect(swit(3, [], () => 2)).toBe(2)
  expect(swit(3, [], 2)).toBe(2)
  expect(swit(3, [], val => val)).toBe(3)

  expect(swit(3, [[3, () => 4]])).toBe(4)
  expect(swit(3, [[3, 4]])).toBe(4)
  expect(swit(3, [[[2, 3, 4], () => 5]])).toBe(5)
  expect(swit(3, [[[2, 3, 4], 5]])).toBe(5)
  expect(swit(3, [[3, val => val]])).toBe(3)
})
