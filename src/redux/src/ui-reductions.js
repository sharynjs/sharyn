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

export const setUiReduction = (payload: Object) => (state: Object) => ({ ...state, ...payload })

export const deleteUiReduction = (key: string) => (state: Object) => {
  const newState = { ...state }
  delete newState[key]
  return newState
}
