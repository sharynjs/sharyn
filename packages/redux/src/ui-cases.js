// @flow

import { SHARYN_DISMISS_FIRST_NOTIFICATION, SHARYN_NOTIFY, SHARYN_NOTIFY_MULTIPLE } from './actions'
import {
  addOneNotification,
  addMultipleNotifications,
  removeFirstNotification,
} from './ui-reductions'

// eslint-disable-next-line no-unused-vars
export const dismissFirstNotificationCase = (uiState: Object, payload?: any) => [
  SHARYN_DISMISS_FIRST_NOTIFICATION,
  () => removeFirstNotification(uiState),
]

export const notifyCase = (uiState: Object, payload: Object) => [
  SHARYN_NOTIFY,
  () => addOneNotification(uiState, payload),
]

export const notifyMultipleCase = (uiState: Object, payload: Object[]) => [
  SHARYN_NOTIFY_MULTIPLE,
  () => addMultipleNotifications(uiState, payload),
]
