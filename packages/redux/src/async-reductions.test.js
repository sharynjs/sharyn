import { compose } from 'recompose'
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  setAsyncHelper,
  setAsyncTrueReduction,
  setAsyncPageTrueReduction,
  setAsyncTrueReductionFromAsyncKeyProp,
  setAsyncRequestReduction,
  setAsyncRequestReductionFromAsyncKeyProp,
  setAsyncSuccessReduction,
  setAsyncSuccessReductionFromAsyncKeyProp,
  setAsyncFailureReduction,
  setAsyncFailureReductionFromAsyncKeyProp,
  setAsyncCustomReductionFromProps,
  delAsyncHelper,
  delAsyncReduction,
  delAsyncPageReduction,
  delAsyncReductionFromAsyncKeyProp,
  clearAsyncHelper,
  clearAsyncExceptPageReduction,
} from './async-reductions'

test('setAsyncHelper', () => {
  expect(setAsyncHelper({}, 'a')).toEqual({ a: true })
  expect(setAsyncHelper({}, 'a', 'custom')).toEqual({ a: 'custom' })
})

test('setAsyncTrueReduction', () => {
  expect(setAsyncTrueReduction('a')({})).toEqual({ a: true })
  expect(compose(setAsyncTrueReduction('a'))({})).toEqual({ a: true })
})
test('setAsyncPageTrueReduction', () => {
  expect(setAsyncPageTrueReduction()({})).toEqual({ page: true })
  expect(compose(setAsyncPageTrueReduction())({})).toEqual({ page: true })
})

test('setAsyncTrueReductionFromAsyncKeyProp', () => {
  expect(setAsyncTrueReductionFromAsyncKeyProp({ asyncKey: 'a' })({})).toEqual({ a: true })
  expect(compose(setAsyncTrueReductionFromAsyncKeyProp({ asyncKey: 'a' }))({})).toEqual({ a: true })
})

test('setAsyncRequestReduction', () => {
  expect(setAsyncRequestReduction('a')({})).toEqual({ a: REQUEST })
  expect(compose(setAsyncRequestReduction('a'))({})).toEqual({ a: REQUEST })
})

test('setAsyncRequestReductionFromAsyncKeyProp', () => {
  expect(setAsyncRequestReductionFromAsyncKeyProp({ asyncKey: 'a' })({})).toEqual({ a: REQUEST })
  expect(compose(setAsyncRequestReductionFromAsyncKeyProp({ asyncKey: 'a' }))({})).toEqual({
    a: REQUEST,
  })
})

test('setAsyncSuccessReduction', () => {
  expect(setAsyncSuccessReduction('a')({})).toEqual({ a: SUCCESS })
  expect(compose(setAsyncSuccessReduction('a'))({})).toEqual({ a: SUCCESS })
})

test('setAsyncSuccessReductionFromAsyncKeyProp', () => {
  expect(setAsyncSuccessReductionFromAsyncKeyProp({ asyncKey: 'a' })({})).toEqual({ a: SUCCESS })
  expect(compose(setAsyncSuccessReductionFromAsyncKeyProp({ asyncKey: 'a' }))({})).toEqual({
    a: SUCCESS,
  })
})

test('setAsyncFailureReduction', () => {
  expect(setAsyncFailureReduction('a')({})).toEqual({ a: FAILURE })
  expect(compose(setAsyncFailureReduction('a'))({})).toEqual({ a: FAILURE })
})

test('setAsyncFailureReductionFromAsyncKeyProp', () => {
  expect(setAsyncFailureReductionFromAsyncKeyProp({ asyncKey: 'a' })({})).toEqual({ a: FAILURE })
  expect(compose(setAsyncFailureReductionFromAsyncKeyProp({ asyncKey: 'a' }))({})).toEqual({
    a: FAILURE,
  })
})

test('setAsyncCustomReductionFromProps', () => {
  expect(setAsyncCustomReductionFromProps({ asyncKey: 'a', asyncValue: 'custom' })({})).toEqual({
    a: 'custom',
  })
  expect(
    compose(
      setAsyncCustomReductionFromProps({
        asyncKey: 'a',
        asyncValue: 'custom',
      }),
    )({}),
  ).toEqual({
    a: 'custom',
  })
})

test('delAsyncHelper', () => {
  const asyncState = { foo: 'foo', bar: 'bar' }
  expect(delAsyncHelper(asyncState, 'foo')).toEqual({ bar: 'bar' })
})

test('delAsyncReduction', () => {
  const asyncState = { foo: 'foo', bar: 'bar' }
  expect(delAsyncReduction('foo')(asyncState)).toEqual({ bar: 'bar' })
  expect(compose(delAsyncReduction('foo'))(asyncState)).toEqual({ bar: 'bar' })
})

test('delAsyncPageReduction', () => {
  const asyncState = { page: 'page', bar: 'bar' }
  expect(delAsyncPageReduction()(asyncState)).toEqual({ bar: 'bar' })
  expect(compose(delAsyncPageReduction())(asyncState)).toEqual({ bar: 'bar' })
})

test('delAsyncReductionFromAsyncKeyProp', () => {
  const asyncState = { foo: 'foo', bar: 'bar' }
  expect(delAsyncReductionFromAsyncKeyProp({ asyncKey: 'foo' })(asyncState)).toEqual({ bar: 'bar' })
  expect(compose(delAsyncReductionFromAsyncKeyProp({ asyncKey: 'foo' }))(asyncState)).toEqual({
    bar: 'bar',
  })
})

test('clearAsyncHelper', () => {
  const asyncState = { foo: 'foo', bar: 'bar' }
  expect(clearAsyncHelper(asyncState)).toEqual({})
  expect(clearAsyncHelper(asyncState, 'foo')).toEqual({ foo: 'foo' })
})

test('clearAsyncExceptPageReduction', () => {
  const asyncState = { page: 'page', foo: 'foo' }
  expect(clearAsyncExceptPageReduction()(asyncState)).toEqual({ page: 'page' })
  expect(compose(clearAsyncExceptPageReduction())(asyncState)).toEqual({ page: 'page' })
})
