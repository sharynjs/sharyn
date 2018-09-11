import curryOptional from './curry-optional'

// a, b, and c are optional, d is required
const fn = (a, b, c, d) => [a, b, c, d]
const fnCur = curryOptional(fn, 3)

test('curryOptional', () => {
  expect(fnCur('a', 'b', 'c')('d')).toEqual(['a', 'b', 'c', 'd'])
  expect(fnCur('a', 'b')('d')).toEqual(['a', 'b', undefined, 'd'])
  expect(fnCur('a')('d')).toEqual(['a', undefined, undefined, 'd'])
  expect(fnCur()('d')).toEqual([undefined, undefined, undefined, 'd'])
})
