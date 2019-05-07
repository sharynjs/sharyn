import compose from 'recompose/compose'
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  asyncMapSetTrueReduction,
  asyncMapSetPageTrueReduction,
  asyncMapSetTrueReductionFromAsyncKeyProp,
  asyncMapSetRequestReduction,
  asyncMapSetRequestReductionFromAsyncKeyProp,
  asyncMapSetSuccessReduction,
  asyncMapSetSuccessReductionFromAsyncKeyProp,
  asyncMapSetFailureReduction,
  asyncMapSetFailureReductionFromAsyncKeyProp,
  asyncMapSetCustomReductionFromProps,
  asyncMapDeleteReduction,
  asyncMapDeletePageReduction,
  asyncMapDeleteReductionFromAsyncKeyProp,
  asyncMapClearExceptPageReduction,
} from './async-map-reductions'

test('asyncMapSetTrueReduction', () => {
  expect(asyncMapSetTrueReduction('a')({})).toEqual({ a: true })
  expect(compose(asyncMapSetTrueReduction('a'))({})).toEqual({ a: true })
})
test('asyncMapSetPageTrueReduction', () => {
  expect(asyncMapSetPageTrueReduction()({})).toEqual({ page: true })
  expect(compose(asyncMapSetPageTrueReduction())({})).toEqual({ page: true })
})

test('asyncMapSetTrueReductionFromAsyncKeyProp', () => {
  expect(asyncMapSetTrueReductionFromAsyncKeyProp({ asyncKey: 'a' })({})).toEqual({ a: true })
  expect(compose(asyncMapSetTrueReductionFromAsyncKeyProp({ asyncKey: 'a' }))({})).toEqual({
    a: true,
  })
})

test('asyncMapSetRequestReduction', () => {
  expect(asyncMapSetRequestReduction('a')({})).toEqual({ a: REQUEST })
  expect(compose(asyncMapSetRequestReduction('a'))({})).toEqual({ a: REQUEST })
})

test('asyncMapSetRequestReductionFromAsyncKeyProp', () => {
  expect(asyncMapSetRequestReductionFromAsyncKeyProp({ asyncKey: 'a' })({})).toEqual({ a: REQUEST })
  expect(compose(asyncMapSetRequestReductionFromAsyncKeyProp({ asyncKey: 'a' }))({})).toEqual({
    a: REQUEST,
  })
})

test('asyncMapSetSuccessReduction', () => {
  expect(asyncMapSetSuccessReduction('a')({})).toEqual({ a: SUCCESS })
  expect(compose(asyncMapSetSuccessReduction('a'))({})).toEqual({ a: SUCCESS })
})

test('asyncMapSetSuccessReductionFromAsyncKeyProp', () => {
  expect(asyncMapSetSuccessReductionFromAsyncKeyProp({ asyncKey: 'a' })({})).toEqual({ a: SUCCESS })
  expect(compose(asyncMapSetSuccessReductionFromAsyncKeyProp({ asyncKey: 'a' }))({})).toEqual({
    a: SUCCESS,
  })
})

test('asyncMapSetFailureReduction', () => {
  expect(asyncMapSetFailureReduction('a')({})).toEqual({ a: FAILURE })
  expect(compose(asyncMapSetFailureReduction('a'))({})).toEqual({ a: FAILURE })
})

test('asyncMapSetFailureReductionFromAsyncKeyProp', () => {
  expect(asyncMapSetFailureReductionFromAsyncKeyProp({ asyncKey: 'a' })({})).toEqual({ a: FAILURE })
  expect(compose(asyncMapSetFailureReductionFromAsyncKeyProp({ asyncKey: 'a' }))({})).toEqual({
    a: FAILURE,
  })
})

test('asyncMapSetCustomReductionFromProps', () => {
  expect(asyncMapSetCustomReductionFromProps({ asyncKey: 'a', asyncValue: 'custom' })({})).toEqual({
    a: 'custom',
  })
  expect(
    compose(
      asyncMapSetCustomReductionFromProps({
        asyncKey: 'a',
        asyncValue: 'custom',
      }),
    )({}),
  ).toEqual({
    a: 'custom',
  })
})

test('asyncMapDeleteReduction', () => {
  const s = { foo: 'foo', bar: 'bar' }
  expect(asyncMapDeleteReduction('foo')(s)).toEqual({ bar: 'bar' })
  expect(compose(asyncMapDeleteReduction('foo'))(s)).toEqual({ bar: 'bar' })
})

test('asyncMapDeletePageReduction', () => {
  const s = { page: 'page', bar: 'bar' }
  expect(asyncMapDeletePageReduction()(s)).toEqual({ bar: 'bar' })
  expect(compose(asyncMapDeletePageReduction())(s)).toEqual({ bar: 'bar' })
})

test('asyncMapDeleteReductionFromAsyncKeyProp', () => {
  const s = { foo: 'foo', bar: 'bar' }
  expect(asyncMapDeleteReductionFromAsyncKeyProp({ asyncKey: 'foo' })(s)).toEqual({ bar: 'bar' })
  expect(compose(asyncMapDeleteReductionFromAsyncKeyProp({ asyncKey: 'foo' }))(s)).toEqual({
    bar: 'bar',
  })
})

test('asyncMapClearExceptPageReduction', () => {
  const s = { page: 'page', foo: 'foo' }
  expect(asyncMapClearExceptPageReduction()(s)).toEqual({ page: 'page' })
  expect(compose(asyncMapClearExceptPageReduction())(s)).toEqual({ page: 'page' })
})
