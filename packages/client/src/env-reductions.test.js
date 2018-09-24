import { compose } from 'recompose'
import { disableIsSsrRender, setIsOnline } from './env-reductions'

test('disableIsFirstRender', () => {
  const envState = { foo: 'foo', isSsrRender: true }
  expect(disableIsSsrRender(envState)).toEqual({ foo: 'foo', isSsrRender: false })
})

test('setIsOnline', () => {
  const envState = { foo: 'foo' }
  expect(setIsOnline(envState, true)).toEqual({ foo: 'foo', isOnline: true })
  expect(compose(setIsOnline(false))(envState)).toEqual({ foo: 'foo', isOnline: false })
})
