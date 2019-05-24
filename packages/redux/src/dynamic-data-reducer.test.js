import { setDynamicData, deleteDynamicData, clearDynamicData } from './actions'
import dynamicDataReducer from './dynamic-data-reducer'

test('dynamicDataReducer', () => {
  let s

  s = dynamicDataReducer(s, setDynamicData({ foo: 'foo' }))
  expect(s).toEqual({ foo: 'foo' })

  s = dynamicDataReducer(s, deleteDynamicData('foo'))
  expect(s).toEqual({})

  s = dynamicDataReducer(s, setDynamicData({ foo: 'foo', bar: 'bar' }))
  s = dynamicDataReducer(s, clearDynamicData())
  expect(s).toEqual({})
})
