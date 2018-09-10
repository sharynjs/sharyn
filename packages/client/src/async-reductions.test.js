import { compose } from 'recompose'
import {
  setAsyncRequest,
  setAsyncSuccess,
  setAsyncFailure,
  delAsyncEntry,
  clearAsync,
} from './async-reductions'

test('setAsyncRequest', () => {
  const asyncState = {}
  expect(setAsyncRequest(asyncState, { key: 'foo' })).toEqual({ foo: true })
  expect(setAsyncRequest(asyncState, { key: 'foo', useStatus: true })).toEqual({ foo: 'REQUEST' })
  expect(setAsyncRequest(asyncState, { key: 'foo', status: 'CUSTOM' })).toEqual({ foo: 'CUSTOM' })
  expect(() =>
    setAsyncRequest(asyncState, { key: 'foo', useStatus: false, status: 'CUSTOM' }),
  ).toThrow()
  expect(compose(setAsyncRequest({ key: 'foo', status: 'CUSTOM' }))(asyncState)).toEqual({
    foo: 'CUSTOM',
  })
})

test('setAsyncSuccess', () => {
  const asyncState = { foo: true }
  expect(setAsyncSuccess(asyncState, { key: 'foo' })).toEqual({})
  expect(setAsyncSuccess(asyncState, { key: 'foo', useStatus: true })).toEqual({ foo: 'SUCCESS' })
  expect(setAsyncSuccess(asyncState, { key: 'foo', status: 'CUSTOM' })).toEqual({ foo: 'CUSTOM' })
  expect(() =>
    setAsyncSuccess(asyncState, { key: 'foo', useStatus: false, status: 'CUSTOM' }),
  ).toThrow()
  expect(compose(setAsyncSuccess({ key: 'foo', status: 'CUSTOM' }))(asyncState)).toEqual({
    foo: 'CUSTOM',
  })
})

test('setAsyncFailure', () => {
  const asyncState = { foo: true }
  expect(setAsyncFailure(asyncState, { key: 'foo' })).toEqual({})
  expect(setAsyncFailure(asyncState, { key: 'foo', useStatus: true })).toEqual({ foo: 'FAILURE' })
  expect(setAsyncFailure(asyncState, { key: 'foo', status: 'CUSTOM' })).toEqual({ foo: 'CUSTOM' })
  expect(() =>
    setAsyncFailure(asyncState, { key: 'foo', useStatus: false, status: 'CUSTOM' }),
  ).toThrow()
  expect(compose(setAsyncFailure({ key: 'foo', status: 'CUSTOM' }))(asyncState)).toEqual({
    foo: 'CUSTOM',
  })
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
