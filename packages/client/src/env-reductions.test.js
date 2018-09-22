import { compose } from 'recompose'
import { disableIsFirstRender, setIsOnline } from './env-reductions'

test('disableIsFirstRender', () => {
  const envState = { foo: 'foo', isFirstRender: true }
  expect(disableIsFirstRender(envState)).toEqual({ foo: 'foo', isFirstRender: false })
})

test('setIsOnline', () => {
  const envState = { foo: 'foo' }
  expect(setIsOnline(envState, true)).toEqual({ foo: 'foo', isOnline: true })
  expect(compose(setIsOnline(false))(envState)).toEqual({ foo: 'foo', isOnline: false })
})
