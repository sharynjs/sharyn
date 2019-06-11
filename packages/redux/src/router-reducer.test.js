import { navigation, initialNavigation } from './actions'
import routerReducer from './router-reducer'

test('routerReducer', () => {
  let state

  expect(routerReducer(state)).toEqual({ location: {}, match: {}, lastAction: null })

  state = routerReducer(state, initialNavigation({ location: { a: 1 }, match: { b: 2 } }))
  expect(state).toEqual({ location: { a: 1 }, match: { b: 2 }, lastAction: null })

  state = routerReducer(state, navigation({ location: { c: 3 }, match: { d: 4 }, action: 'PLOP' }))
  expect(state).toEqual({ location: { c: 3 }, match: { d: 4 }, lastAction: 'PLOP' })
})
