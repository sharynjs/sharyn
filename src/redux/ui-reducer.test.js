import { notify, notifyMultiple, dismissFirstNotification, setUi, deleteUi } from './actions'
import uiReducer from './ui-reducer'

test('uiReducer', () => {
  let state

  expect(uiReducer(state)).toEqual({ notifications: [] })

  state = uiReducer(state, notify('a'))
  expect(state).toEqual({ notifications: ['a'] })

  state = uiReducer(state, notifyMultiple(['b', 'c']))
  expect(state).toEqual({ notifications: ['a', 'b', 'c'] })

  state = uiReducer(state, dismissFirstNotification())
  expect(state).toEqual({ notifications: ['b', 'c'] })

  state = uiReducer(state, setUi({ popup: true }))
  expect(state).toEqual({ notifications: ['b', 'c'], popup: true })

  state = uiReducer(state, deleteUi('popup'))
  expect(state).toEqual({ notifications: ['b', 'c'] })
})
