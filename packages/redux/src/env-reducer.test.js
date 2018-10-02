import { online, offline, startClientNavigation } from './actions'
import envReducer from './env-reducer'

test('envReducer', () => {
  let state = { isServerRender: true }

  state = envReducer(state, offline())
  expect(state).toEqual({ isOnline: false, isServerRender: true })

  state = envReducer(state, online())
  expect(state).toEqual({ isOnline: true, isServerRender: true })

  state = envReducer(state, startClientNavigation())
  expect(state).toEqual({ isOnline: true, isServerRender: false })
})
