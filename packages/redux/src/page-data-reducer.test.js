import {
  fetchPageRequest,
  fetchPageSuccess,
  asyncSuccess,
  navigation,
  invalidateFields,
  clearInvalidFields,
} from './actions'
import pageDataReducer from './page-data-reducer'

test('pageDataReducer', () => {
  let s

  s = pageDataReducer(s, fetchPageSuccess({ data: { a: 'a' } }))
  expect(s).toEqual({ a: 'a' })

  s = pageDataReducer(s, navigation())
  expect(s).toEqual({})

  s = pageDataReducer(s, asyncSuccess({ data: { a: 'a' } }))
  expect(s).toEqual({ a: 'a' })

  s = pageDataReducer(s, fetchPageRequest())
  expect(s).toEqual({})

  s = pageDataReducer(s, invalidateFields({ a: 'a' }))
  expect(s).toEqual({ invalidFields: { a: 'a' } })

  s = pageDataReducer(s, clearInvalidFields())
  expect(s).toEqual({})
})
