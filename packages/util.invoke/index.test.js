const invoke = require('.')

test('invoke', () => {
  expect(invoke(() => 1)).toBe(1)
  expect(invoke(() => 1, () => 2)).toEqual([1, 2])
})
