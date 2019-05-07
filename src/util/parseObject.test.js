import parseObject from './parseObject'

test('parseObject', () => {
  expect(parseObject({})).toEqual({})
  expect(parseObject({ a: '' })).toEqual({})
  expect(parseObject({ a: 'a' })).toEqual({ a: 'a' })

  expect(parseObject({ a: '0' }, { integer: 'a' })).toEqual({ a: 0 })
  expect(parseObject({ a: '1' }, { integer: 'a' })).toEqual({ a: 1 })
  expect(parseObject({ a: '1' }, { integer: ['a'] })).toEqual({ a: 1 })
  expect(() => parseObject({ a: 'x' }, { integer: 'a' })).toThrow(
    "Value 'x' of integer property 'a' is not an integer.",
  )

  expect(parseObject({ a: 'on' }, { toggle: 'a' })).toEqual({ a: true })
  expect(parseObject({ a: 'on' }, { toggle: ['a'] })).toEqual({ a: true })
  expect(parseObject({}, { toggle: 'a' })).toEqual({})
  expect(() => parseObject({ a: 'x' }, { toggle: 'a' })).toThrow(
    "Value 'x' of toggle property 'a' is not 'on'.",
  )

  expect(
    parseObject(
      { name: 'Sven', lastName: '', age: '30', isCool: 'on' },
      { integer: ['age'], toggle: ['isCool', 'isFun'] },
    ),
  ).toEqual({ name: 'Sven', age: 30, isCool: true })
})
