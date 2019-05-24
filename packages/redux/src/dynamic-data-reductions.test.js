import compose from 'recompose/compose'
import {
  dynamicDataSetReduction,
  dynamicDataDeleteReduction,
  dynamicDataClearReduction,
} from './dynamic-data-reductions'

test('dynamicDataSetReduction', () => {
  const s = { foo: 'foo' }
  expect(dynamicDataSetReduction({ bar: 'bar' })(s)).toEqual({ foo: 'foo', bar: 'bar' })
  expect(compose(dynamicDataSetReduction({ bar: 'bar' }))(s)).toEqual({ foo: 'foo', bar: 'bar' })
})

test('dynamicDataDeleteReduction', () => {
  const s = { foo: 'foo', bar: 'bar' }
  expect(dynamicDataDeleteReduction('bar')(s)).toEqual({ foo: 'foo' })
  expect(compose(dynamicDataDeleteReduction('bar'))(s)).toEqual({ foo: 'foo' })
})

test('dynamicDataClearReduction', () => {
  const s = { foo: 'foo', bar: 'bar' }
  expect(dynamicDataClearReduction()(s)).toEqual({})
  expect(compose(dynamicDataClearReduction())(s)).toEqual({})
})
