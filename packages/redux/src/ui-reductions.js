// @flow

export const addOneNotification = (uiState: Object, notification?: Object) => ({
  ...uiState,
  notifications: [...uiState.notifications, ...(notification ? [notification] : [])],
})

export const addMultipleNotifications = (uiState: Object, notifications?: Object[] = []) => ({
  ...uiState,
  notifications: [...uiState.notifications, ...notifications],
})

export const removeFirstNotification = (uiState: Object) => ({
  ...uiState,
  notifications: uiState.notifications.splice(1),
})
