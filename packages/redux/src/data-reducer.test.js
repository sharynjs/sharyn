import {
  fetchPageRequest,
  fetchPageSuccess,
  asyncSuccess,
  navigation,
  invalidateFields,
  clearInvalidFields,
} from './actions'
import dataReducer from './data-reducer'

test('dataReducer', () => {
  let state

  state = dataReducer(state, fetchPageSuccess({ data: { a: 'a' } }))
  expect(state).toEqual({ a: 'a' })

  state = dataReducer(state, navigation())
  expect(state).toEqual({})

  state = dataReducer(state, asyncSuccess({ data: { a: 'a' } }))
  expect(state).toEqual({ a: 'a' })

  state = dataReducer(state, fetchPageRequest())
  expect(state).toEqual({})

  state = dataReducer(state, invalidateFields({ a: 'a' }))
  expect(state).toEqual({ invalidFields: { a: 'a' } })

  state = dataReducer(state, clearInvalidFields())
  expect(state).toEqual({})
})
