import { compose } from 'recompose'
import { globalDataSetReduction, globalDataDeleteReduction } from './global-data-reductions'

test('globalDataSetReduction', () => {
  const s = { foo: 'foo' }
  expect(globalDataSetReduction({ bar: 'bar' })(s)).toEqual({ foo: 'foo', bar: 'bar' })
  expect(compose(globalDataSetReduction({ bar: 'bar' }))(s)).toEqual({ foo: 'foo', bar: 'bar' })
})

test('globalDataDeleteReduction', () => {
  const s = { foo: 'foo', bar: 'bar' }
  expect(globalDataDeleteReduction('bar')(s)).toEqual({ foo: 'foo' })
  expect(compose(globalDataDeleteReduction('bar'))(s)).toEqual({ foo: 'foo' })
})
