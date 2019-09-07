const run = require('./run')

test('run', () => {
  expect(run(() => 1)).toBe(1)
  expect(run(() => 1, () => 2)).toEqual([1, 2])
})
