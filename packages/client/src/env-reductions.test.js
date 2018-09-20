import { disableIsFirstRender } from './env-reductions'

test('disableIsFirstRender', () => {
  const envState = { foo: 'foo', isFirstRender: true }
  expect(disableIsFirstRender(envState)).toEqual({ foo: 'foo', isFirstRender: false })
})
