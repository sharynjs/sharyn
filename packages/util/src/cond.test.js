import cond from './cond'

test('swit', () => {
  expect(cond([])).toBe(undefined)
  expect(cond([], () => 2)).toBe(2)
  expect(cond([], 2)).toBe(2)

  expect(cond([[true, () => 4]])).toBe(4)
  expect(cond([[[false, true], () => 5]])).toBe(5)
  expect(cond([[[false, true], 5]])).toBe(5)
})
