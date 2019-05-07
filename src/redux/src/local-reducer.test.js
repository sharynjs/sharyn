import { setLocal, deleteLocal } from './actions'
import localReducer from './local-reducer'

test('localReducer', () => {
  let state

  state = localReducer(state, setLocal({ foo: 'foo' }))
  expect(state).toEqual({ foo: 'foo' })

  state = localReducer(state, deleteLocal('foo'))
  expect(state).toEqual({})
})
