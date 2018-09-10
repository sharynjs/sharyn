import { compose } from 'recompose'
import { setAsyncEntry, delAsyncEntry, clearAsync } from './async-reductions'

test('setAsyncEntry', () => {
  const asyncState = { foo: 'foo' }
  expect(setAsyncEntry(asyncState, 'bar', 'BAR')).toEqual({ foo: 'foo', bar: 'BAR' })
  expect(compose(setAsyncEntry('baz', 'BAZ'))(asyncState)).toEqual({ foo: 'foo', baz: 'BAZ' })
})

test('delAsyncEntry', () => {
  const asyncState = { foo: 'foo' }
  expect(delAsyncEntry(asyncState, 'foo')).toEqual({})
  expect(compose(delAsyncEntry('foo'))(asyncState)).toEqual({})
})

test('clearAsync', () => {
  const asyncState = { foo: 'foo' }
  expect(clearAsync()).toEqual({})
  expect(clearAsync(asyncState)).toEqual({})
  expect(compose(clearAsync)(asyncState)).toEqual({})
})
