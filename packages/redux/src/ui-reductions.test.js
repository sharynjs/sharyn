import compose from 'recompose/compose'
import {
  addOneNotificationReduction,
  addMultipleNotificationsReduction,
  removeFirstNotificationReduction,
  setUiReduction,
  deleteUiReduction,
} from './ui-reductions'

test('addOneNotificationReduction', () =>
  expect(addOneNotificationReduction('notif')({ notifications: [] })).toEqual({
    notifications: ['notif'],
  }))

test('addMultipleNotificationsReduction', () =>
  expect(addMultipleNotificationsReduction(['a', 'b'])({ notifications: [] })).toEqual({
    notifications: ['a', 'b'],
  }))

test('removeFirstNotificationReduction', () =>
  expect(removeFirstNotificationReduction()({ notifications: ['a', 'b'] })).toEqual({
    notifications: ['b'],
  }))

test('setUiReduction', () => {
  const uiState = { foo: 'foo' }
  expect(setUiReduction({ bar: 'baz' })(uiState)).toEqual({ foo: 'foo', bar: 'baz' })
  expect(compose(setUiReduction({ bar: 'baz' }))(uiState)).toEqual({ foo: 'foo', bar: 'baz' })
})

test('deleteUiReduction', () => {
  const uiState = { foo: 'foo', bar: 'bar' }
  expect(deleteUiReduction('bar')(uiState)).toEqual({ foo: 'foo' })
  expect(compose(deleteUiReduction('bar'))(uiState)).toEqual({ foo: 'foo' })
})
