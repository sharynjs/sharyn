import { compose } from 'recompose'
import { disableIsServerRender, setIsOnline } from './env-reductions'

test('disableIsFirstRender', () => {
  const envState = { foo: 'foo', isServerRender: true }
  expect(disableIsServerRender(envState)).toEqual({ foo: 'foo', isServerRender: false })
})

test('setIsOnline', () => {
  const envState = { foo: 'foo' }
  expect(setIsOnline(envState, true)).toEqual({ foo: 'foo', isOnline: true })
  expect(compose(setIsOnline(false))(envState)).toEqual({ foo: 'foo', isOnline: false })
})
