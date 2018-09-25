import {
  addOneNotification,
  addMultipleNotifications,
  removeFirstNotification,
} from './ui-reductions'

test('addOneNotification', () =>
  expect(addOneNotification({ notifications: [] }, 'notif')).toEqual({
    notifications: ['notif'],
  }))

test('addMultipleNotifications', () =>
  expect(addMultipleNotifications({ notifications: [] }, ['a', 'b'])).toEqual({
    notifications: ['a', 'b'],
  }))

test('removeFirstNotification', () =>
  expect(removeFirstNotification({ notifications: ['a', 'b'] })).toEqual({
    notifications: ['b'],
  }))
