import { setUserReduction, deleteUserReduction } from './user-reductions'

test('setUser', () => {
  expect(setUserReduction({ foo: 'foo' })()).toEqual({ foo: 'foo' })
})

test('deleteUser', () => {
  expect(deleteUserReduction()('anything')).toEqual(null)
})
