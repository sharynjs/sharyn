import { compose } from 'recompose'

import {
  pageDataAddReductionFromDataProp,
  pageDataAddInvalidFieldsReduction,
  pageDataDeleteReduction,
  pageDataClearReduction,
} from './page-data-reductions'

test('pageDataAddReductionFromDataProp', () => {
  expect(pageDataAddReductionFromDataProp({ data: { a: 'a' } })({})).toEqual({ a: 'a' })
})

test('pageDataAddInvalidFieldsReduction', () => {
  expect(pageDataAddInvalidFieldsReduction({ a: 'a' })({})).toEqual({ invalidFields: { a: 'a' } })
})

test('pageDataDeleteReduction', () => {
  const s = { foo: 'foo', bar: 'bar' }
  expect(pageDataDeleteReduction('foo')(s)).toEqual({ bar: 'bar' })
  expect(compose(pageDataDeleteReduction('foo'))(s)).toEqual({ bar: 'bar' })
})

test('pageDataClearReduction', () => {
  const s = { foo: 'foo' }
  expect(pageDataClearReduction()(s)).toEqual({})
  expect(compose(pageDataClearReduction())(s)).toEqual({})
})
