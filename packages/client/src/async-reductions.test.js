import { compose } from 'recompose'
import {
  setAsyncRequest,
  setAsyncSuccess,
  setAsyncFailure,
  delAsync,
  clearAsync,
} from './async-reductions'

test('setAsyncRequest', () => {
  const asyncState = { foo: 'foo' }
  expect(setAsyncRequest(asyncState, 'bar')).toEqual({ foo: 'foo', bar: 'REQUEST' })
  expect(compose(setAsyncRequest('bar'))(asyncState)).toEqual({ foo: 'foo', bar: 'REQUEST' })
})

test('setAsyncSuccess', () => {
  const asyncState = { foo: 'foo' }
  expect(setAsyncSuccess(asyncState, 'bar')).toEqual({ foo: 'foo', bar: 'SUCCESS' })
  expect(compose(setAsyncSuccess('bar'))(asyncState)).toEqual({ foo: 'foo', bar: 'SUCCESS' })
})

test('setAsyncFailure', () => {
  const asyncState = { foo: 'foo' }
  expect(setAsyncFailure(asyncState, 'bar')).toEqual({ foo: 'foo', bar: 'FAILURE' })
  expect(compose(setAsyncFailure('bar'))(asyncState)).toEqual({ foo: 'foo', bar: 'FAILURE' })
})

test('delAsync', () => {
  const asyncState = { foo: 'foo' }
  expect(delAsync(asyncState, 'foo')).toEqual({})
  expect(compose(delAsync('foo'))(asyncState)).toEqual({})
})

test('clearAsync', () => {
  const asyncState = { foo: 'foo' }
  expect(clearAsync()).toEqual({})
  expect(clearAsync(asyncState)).toEqual({})
  expect(compose(clearAsync)(asyncState)).toEqual({})
})
