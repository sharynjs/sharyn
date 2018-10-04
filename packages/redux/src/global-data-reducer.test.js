import { setGlobalData, deleteGlobalData } from './actions'
import globalDataReducer from './global-data-reducer'

test('globalDataReducer', () => {
  let s

  s = globalDataReducer(s, setGlobalData({ foo: 'foo' }))
  expect(s).toEqual({ foo: 'foo' })

  s = globalDataReducer(s, deleteGlobalData('foo'))
  expect(s).toEqual({})
})
