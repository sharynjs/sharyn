import { setUser, deleteUser } from './user-reductions'

test('setUser', () => {
  expect(setUser({ foo: 'foo' })).toEqual({ foo: 'foo' })
})

test('deleteUser', () => {
  expect(deleteUser('anything')).toEqual(null)
})
