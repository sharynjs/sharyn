const { setGlobal, getGlobal, getAllGlobal, deleteGlobal, clearGlobal } = require('./global')

test('global', () => {
  expect(getAllGlobal()).toEqual({})
  setGlobal('a', 'a')
  setGlobal('b', 'b')
  setGlobal('c', 'c')
  expect(getAllGlobal()).toEqual({ a: 'a', b: 'b', c: 'c' })
  expect(getGlobal('a')).toBe('a')
  deleteGlobal('b')
  expect(getAllGlobal()).toEqual({ a: 'a', c: 'c' })
  clearGlobal()
  expect(getAllGlobal()).toEqual({})
})
