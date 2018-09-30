import {
  fetchPageRequest,
  fetchPageSuccess,
  fetchPageFailure,
  asyncRequest,
  asyncSuccess,
  asyncFailure,
  navigation,
} from './actions'
import asyncReducer from './async-reducer'

test('asyncReducer', () => {
  let state

  state = asyncReducer()
  expect(state).toEqual({})

  state = asyncReducer(state, fetchPageRequest())
  expect(state).toEqual({ page: true })

  state = asyncReducer(state, asyncRequest('hey'))
  expect(state).toEqual({ page: true, hey: true })

  state = asyncReducer(state, navigation())
  expect(state).toEqual({ page: true })

  state = asyncReducer(state, fetchPageSuccess())
  expect(state).toEqual({})

  state = asyncReducer(state, fetchPageRequest())
  expect(state).toEqual({ page: true })

  state = asyncReducer(state, fetchPageFailure())
  expect(state).toEqual({})

  state = asyncReducer(state, asyncRequest('success-case'))
  expect(state).toEqual({ 'success-case': true })

  state = asyncReducer(state, asyncSuccess({ asyncKey: 'success-case' }))
  expect(state).toEqual({})

  state = asyncReducer(state, asyncRequest('failure-case'))
  expect(state).toEqual({ 'failure-case': true })

  state = asyncReducer(state, asyncFailure({ asyncKey: 'failure-case' }))
  expect(state).toEqual({})
})
