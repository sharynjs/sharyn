import createReducer from './create-reducer'

test('defaultReducer', () => {
  expect(createReducer()()).toEqual({})
  expect(createReducer(undefined, 'initial')()).toBe('initial')
  expect(createReducer([['a', () => () => 'A']])(null, { type: 'a' })).toBe('A')
  expect(createReducer([['a', () => () => 'A']])(null, { type: 'b' })).toBe(null)
  expect(createReducer([['a', () => () => 'A']])(undefined, { type: 'b' })).toEqual({})

  const reduction1 = () => state => ({ ...state, bar: 'bar' })
  const case1 = ['a', reduction1]
  expect(createReducer([case1])({ foo: 'foo' }, { type: 'a' })).toEqual({
    foo: 'foo',
    bar: 'bar',
  })

  const reduction2 = payload => state => ({ ...state, bar: payload })
  const case2 = ['a', reduction2]
  const errorReduction = () => () => {
    throw Error('This should not get executed but it was')
  }
  const errorCase = ['x', errorReduction]
  expect(
    createReducer([errorCase, case2])({ foo: 'foo' }, { type: 'a', payload: 'payload' }),
  ).toEqual({
    foo: 'foo',
    bar: 'payload',
  })
})
