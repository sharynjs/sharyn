import spreadIf from './spreadIf'

test('spreadIf', () => {
  expect(spreadIf(true, 1)).toEqual([1])
  expect(spreadIf(() => true, 1)).toEqual([1])
  expect(spreadIf(false, 1)).toEqual([])
  expect(spreadIf(() => false, 1)).toEqual([])

  expect(spreadIf(true, 1, null, undefined, true)).toEqual([1, null, undefined, true])
  expect(spreadIf(true, [1, null, undefined, true])).toEqual([1, null, undefined, true])
  expect(spreadIf(false, 1, 2)).toEqual([])
  expect(spreadIf(false, [1, 2])).toEqual([])

  expect(spreadIf(true, {})).toEqual({})
  expect(spreadIf(true, { a: 1 })).toEqual({ a: 1 })
  expect(spreadIf(() => true, { a: 1 })).toEqual({ a: 1 })
  expect(spreadIf(false, { a: 1 })).toEqual({})
  expect(spreadIf(() => false, { a: 1 })).toEqual({})
})
