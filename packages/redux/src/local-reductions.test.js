import { compose } from 'recompose'
import { setLocalReduction, deleteLocalReduction } from './local-reductions'

test('setLocalReduction', () => {
  const localState = { foo: 'foo' }
  expect(setLocalReduction({ bar: 'bar' })(localState)).toEqual({ foo: 'foo', bar: 'bar' })
  expect(compose(setLocalReduction({ bar: 'bar' }))(localState)).toEqual({ foo: 'foo', bar: 'bar' })
})

test('deleteLocalReduction', () => {
  const localState = { foo: 'foo', bar: 'bar' }
  expect(deleteLocalReduction('bar')(localState)).toEqual({ foo: 'foo' })
  expect(compose(deleteLocalReduction('bar'))(localState)).toEqual({ foo: 'foo' })
})
