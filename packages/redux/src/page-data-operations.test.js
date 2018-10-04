import {
  pageDataAddOperation,
  pageDataDeleteOperation,
  pageDataClearOperation,
} from './page-data-operations'

test('pageDataAddOperation', () => {
  expect(pageDataAddOperation({}, { a: 'a' })).toEqual({ a: 'a' })
  expect(pageDataAddOperation({ a: 'a', b: 'b' }, { b: 'X', c: 'c' })).toEqual({
    a: 'a',
    b: 'X',
    c: 'c',
  })
})

test('pageDataDeleteOperation', () => {
  const s = { foo: 'foo', bar: 'bar' }
  expect(pageDataDeleteOperation(s, 'foo')).toEqual({ bar: 'bar' })
})

test('clearDataOperation', () => {
  const s = { foo: 'foo', bar: 'bar' }
  expect(pageDataClearOperation(s)).toEqual({})
})
