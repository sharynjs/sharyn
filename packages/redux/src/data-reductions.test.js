import { compose } from 'recompose'

import {
  addDataReductionFromDataProp,
  addInvalidFieldsDataReduction,
  delDataReduction,
  clearDataReduction,
} from './data-reductions'

test('addDataReductionFromDataProp', () => {
  expect(addDataReductionFromDataProp({ data: { a: 'a' } })({})).toEqual({ a: 'a' })
})

test('addInvalidFieldsDataReduction', () => {
  expect(addInvalidFieldsDataReduction({ a: 'a' })({})).toEqual({ invalidFields: { a: 'a' } })
})

test('delDataReduction', () => {
  const dataState = { foo: 'foo', bar: 'bar' }
  expect(delDataReduction('foo')(dataState)).toEqual({ bar: 'bar' })
  expect(compose(delDataReduction('foo'))(dataState)).toEqual({ bar: 'bar' })
})

test('clearDataReduction', () => {
  const dataState = { foo: 'foo' }
  expect(clearDataReduction()(dataState)).toEqual({})
  expect(compose(clearDataReduction())(dataState)).toEqual({})
})
