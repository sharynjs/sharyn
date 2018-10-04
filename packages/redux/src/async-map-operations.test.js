import {
  asyncMapSetOperation,
  asyncMapDeleteOperation,
  asyncMapClearOperation,
} from './async-map-operations'

test('asyncMapSetOperation', () => {
  expect(asyncMapSetOperation({}, 'a')).toEqual({ a: true })
  expect(asyncMapSetOperation({}, 'a', 'custom')).toEqual({ a: 'custom' })
})

test('asyncMapDeleteOperation', () => {
  const s = { foo: 'foo', bar: 'bar' }
  expect(asyncMapDeleteOperation(s, 'foo')).toEqual({ bar: 'bar' })
})

test('asyncMapClearOperation', () => {
  const s = { foo: 'foo', bar: 'bar' }
  expect(asyncMapClearOperation(s)).toEqual({})
  expect(asyncMapClearOperation(s, 'foo')).toEqual({ foo: 'foo' })
})
