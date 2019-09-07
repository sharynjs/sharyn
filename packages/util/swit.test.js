const swit = require('./swit')

test('swit', () => {
  expect(() => swit()).toThrow()
  expect(() => swit(1)).toThrow()

  expect(swit(1, [1, '1'], [2, '2'], [3, '3'])).toBe('1')
  expect(swit(2, [1, '1'], [2, '2'], [3, '3'])).toBe('2')
  expect(swit(3, [1, '1'], [2, '2'], [3, '3'])).toBe('3')
  expect(swit(4, [1, '1'], [2, '2'], [3, '3'], 'default')).toBe('default')
  expect(swit(4, [1, '1'], [2, '2'], [3, '3'])).toBe(undefined)

  expect(swit(2, [1, '1'], [2, val => val], [3, '3'])).toBe(2)
  expect(swit(4, [1, '1'], [2, '2'], [3, '3'], val => val)).toBe(4)

  expect(swit(2, [1, '1'], [2, 3, 4, '234'], [5, '5'])).toBe('234')
  expect(swit(3, [1, '1'], [2, 3, 4, '234'], [5, '5'])).toBe('234')
  expect(swit(4, [1, '1'], [2, 3, 4, '234'], [5, '5'])).toBe('234')
  expect(swit(5, [1, '1'], [2, 3, 4, '234'], [5, '5'])).toBe('5')

  expect(swit(2, [1, () => '1'], [2, () => '2'], [3, () => '3'])).toBe('2')
  expect(swit(4, [1, '1'], [2, '2'], [3, '3'], () => 'default')).toBe('default')
})
