import spread from './spread'

test('spread', () => {
  expect(spread()).toEqual([])
  expect(spread(undefined)).toEqual([])
  expect(spread(1)).toEqual([1])
  expect(spread(null)).toEqual([null])

  expect(spread(1, 2)).toEqual([1, 2])
  expect(spread([1, 2])).toEqual([1, 2])
  expect(spread(undefined, 1, undefined, 2)).toEqual([1, 2])
  expect(spread([undefined, 1, undefined, 2])).toEqual([1, 2])
  expect(spread(null, 1, null, 2)).toEqual([null, 1, null, 2])
  expect(spread([null, 1, null, 2])).toEqual([null, 1, null, 2])

  expect(spread({})).toEqual({})
  expect(spread({ a: 1 })).toEqual({ a: 1 })
  expect(spread({ a: undefined })).toEqual({})
  expect(spread({ a: undefined, b: null, c: 3 })).toEqual({ b: null, c: 3 })
})
