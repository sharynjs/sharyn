import { compose } from 'recompose'
import { addData, clearData } from './data-reductions'

test('addData', () => {
  const dataState = { foo: 'foo' }
  expect(addData(dataState, { bar: 'bar' })).toEqual({ foo: 'foo', bar: 'bar' })
  expect(compose(addData({ bar: 'bar' }))(dataState)).toEqual({ foo: 'foo', bar: 'bar' })
})

test('clearData', () => {
  const dataState = { foo: 'foo' }
  expect(clearData()).toEqual({})
  expect(clearData(dataState)).toEqual({})
  expect(compose(clearData)(dataState)).toEqual({})
})
