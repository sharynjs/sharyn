import { setAsyncOperation, delAsyncOperation, clearAsyncOperation } from './async-operations'

test('setAsyncOperation', () => {
  expect(setAsyncOperation({}, 'a')).toEqual({ a: true })
  expect(setAsyncOperation({}, 'a', 'custom')).toEqual({ a: 'custom' })
})

test('delAsyncOperation', () => {
  const asyncState = { foo: 'foo', bar: 'bar' }
  expect(delAsyncOperation(asyncState, 'foo')).toEqual({ bar: 'bar' })
})

test('clearAsyncOperation', () => {
  const asyncState = { foo: 'foo', bar: 'bar' }
  expect(clearAsyncOperation(asyncState)).toEqual({})
  expect(clearAsyncOperation(asyncState, 'foo')).toEqual({ foo: 'foo' })
})
