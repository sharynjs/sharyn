import { compose } from 'recompose'
import { addData, delData, clearData } from './data-reductions'

test('addData', () => {
  const dataState = { foo: 'foo' }
  expect(addData(dataState, { bar: 'bar' })).toEqual({ foo: 'foo', bar: 'bar' })
  expect(compose(addData({ bar: 'bar' }))(dataState)).toEqual({ foo: 'foo', bar: 'bar' })
})

test('delData', () => {
  const dataState = { foo: 'foo' }
  expect(() => delData()).toThrow()
  expect(() => delData(1)).toThrow()
  expect(delData('foo')(dataState)).toEqual({})
  expect(compose(delData('foo'))(dataState)).toEqual({})
})

test('clearData', () => {
  const dataState = { foo: 'foo' }
  expect(clearData()).toEqual({})
  expect(clearData(dataState)).toEqual({})
  expect(compose(clearData)(dataState)).toEqual({})
})
