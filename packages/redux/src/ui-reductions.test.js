import {
  addOneNotificationReduction,
  addMultipleNotificationsReduction,
  removeFirstNotificationReduction,
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
