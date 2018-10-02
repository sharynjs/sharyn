import { compose } from 'recompose'
import { disableIsServerRenderReduction, onlineReduction, offlineReduction } from './env-reductions'

test('disableIsServerRenderReduction', () => {
  const envState = { foo: 'foo', isServerRender: true }
  expect(disableIsServerRenderReduction()(envState)).toEqual({ foo: 'foo', isServerRender: false })
})

test('onlineReduction', () => {
  const envState = { foo: 'foo', isOnline: false }
  expect(onlineReduction()(envState)).toEqual({ foo: 'foo', isOnline: true })
  expect(compose(onlineReduction())(envState)).toEqual({ foo: 'foo', isOnline: true })
})
test('offlineReduction', () => {
  const envState = { foo: 'foo', isOnline: true }
  expect(offlineReduction()(envState)).toEqual({ foo: 'foo', isOnline: false })
  expect(compose(offlineReduction())(envState)).toEqual({ foo: 'foo', isOnline: false })
})
