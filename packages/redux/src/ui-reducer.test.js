import { notify, notifyMultiple, dismissFirstNotification } from './actions'
import uiReducer from './ui-reducer'

test('uiReducer', () => {
  let state

  state = uiReducer(state, notify('a'))
  expect(state).toEqual({ notifications: ['a'] })

  state = uiReducer(state, notifyMultiple(['b', 'c']))
  expect(state).toEqual({ notifications: ['a', 'b', 'c'] })

  state = uiReducer(state, dismissFirstNotification())
  expect(state).toEqual({ notifications: ['b', 'c'] })
})
