import { compose } from 'recompose'
import { activateLoading, addOneNotification } from './ui-reductions'

test('activateLoading', () => {
  const uiState = { foo: 'foo' }
  expect(activateLoading(uiState)).toEqual({ foo: 'foo', isLoading: true })
  expect(compose(activateLoading)(uiState)).toEqual({ foo: 'foo', isLoading: true })
})

test('addOneNotification', () => {
  const uiState = { notifications: [] }
  expect(addOneNotification(uiState, 'notif')).toEqual({ notifications: [{ message: 'notif' }] })
  expect(compose(addOneNotification('notif'))(uiState)).toEqual({
    notifications: [{ message: 'notif' }],
  })
})
