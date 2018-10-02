import { logUserIn, logUserOut } from './actions'
import userReducer from './user-reducer'

test('userReducer', () => {
  let state

  expect(userReducer(state)).toEqual(null)

  state = userReducer(state, logUserIn({ a: 'a' }))
  expect(state).toEqual({ a: 'a' })

  state = userReducer(state, logUserOut())
  expect(state).toEqual(null)
})
