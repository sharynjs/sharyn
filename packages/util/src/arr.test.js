import arr from './arr'

test('arr', () => {
  expect(arr()).toEqual([])
  expect(arr(undefined)).toEqual([])
  expect(arr([])).toEqual([])
  expect(arr(null)).toEqual([null])
  expect(arr(1)).toEqual([1])
  expect(arr([1])).toEqual([1])
  expect(arr(1, 2)).toEqual([1, 2])
  expect(arr([1, 2])).toEqual([1, 2])
  expect(arr({})).toEqual([])
  expect(arr({ a: 1, b: 2 })).toEqual([1, 2])
})
