import { addDataOperation, delDataOperation, clearDataOperation } from './data-operations'

test('', () => {
  expect(addDataOperation({}, { a: 'a' })).toEqual({ a: 'a' })
  expect(addDataOperation({ a: 'a', b: 'b' }, { b: 'X', c: 'c' })).toEqual({
    a: 'a',
    b: 'X',
    c: 'c',
  })
})

test('delDataOperation', () => {
  const dataState = { foo: 'foo', bar: 'bar' }
  expect(delDataOperation(dataState, 'foo')).toEqual({ bar: 'bar' })
})

test('clearDataOperation', () => {
  const dataState = { foo: 'foo', bar: 'bar' }
  expect(clearDataOperation(dataState)).toEqual({})
})
