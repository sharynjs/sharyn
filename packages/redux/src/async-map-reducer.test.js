import {
  fetchPageRequest,
  fetchPageSuccess,
  fetchPageFailure,
  asyncRequest,
  asyncSuccess,
  asyncFailure,
  navigation,
} from './actions'
import asyncMapReducer from './async-map-reducer'

test('asyncMapReducer', () => {
  let s

  s = asyncMapReducer()
  expect(s).toEqual({})

  s = asyncMapReducer(s, fetchPageRequest())
  expect(s).toEqual({ page: true })

  s = asyncMapReducer(s, asyncRequest('hey'))
  expect(s).toEqual({ page: true, hey: true })

  s = asyncMapReducer(s, navigation())
  expect(s).toEqual({ page: true })

  s = asyncMapReducer(s, fetchPageSuccess())
  expect(s).toEqual({})

  s = asyncMapReducer(s, fetchPageRequest())
  expect(s).toEqual({ page: true })

  s = asyncMapReducer(s, fetchPageFailure())
  expect(s).toEqual({})

  s = asyncMapReducer(s, asyncRequest('success-case'))
  expect(s).toEqual({ 'success-case': true })

  s = asyncMapReducer(s, asyncSuccess({ asyncKey: 'success-case' }))
  expect(s).toEqual({})

  s = asyncMapReducer(s, asyncRequest('failure-case'))
  expect(s).toEqual({ 'failure-case': true })

  s = asyncMapReducer(s, asyncFailure({ asyncKey: 'failure-case' }))
  expect(s).toEqual({})
})
