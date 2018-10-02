// @flow

export const addOneNotificationReduction = (payload: Object) => (state: Object) => ({
  ...state,
  notifications: [...state.notifications, payload],
})

export const addMultipleNotificationsReduction = (payload: Object[]) => (state: Object) => ({
  ...state,
  notifications: [...state.notifications, ...payload],
})

export const removeFirstNotificationReduction = () => (state: Object) => ({
  ...state,
  notifications: state.notifications.splice(1),
})
