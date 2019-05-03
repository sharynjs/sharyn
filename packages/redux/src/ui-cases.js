// @flow

import {
  SHARYN_DISMISS_FIRST_NOTIFICATION,
  SHARYN_NOTIFY,
  SHARYN_NOTIFY_MULTIPLE,
  SHARYN_SET_UI,
  SHARYN_DELETE_UI,
} from './actions'
import {
  addOneNotificationReduction,
  addMultipleNotificationsReduction,
  removeFirstNotificationReduction,
  setUiReduction,
  deleteUiReduction,
} from './ui-reductions'

export const dismissFirstNotificationCase = [
  SHARYN_DISMISS_FIRST_NOTIFICATION,
  removeFirstNotificationReduction,
]

export const notifyCase = [SHARYN_NOTIFY, addOneNotificationReduction]

export const notifyMultipleCase = [SHARYN_NOTIFY_MULTIPLE, addMultipleNotificationsReduction]

export const setUiCase = [SHARYN_SET_UI, setUiReduction]

export const deleteUiCase = [SHARYN_DELETE_UI, deleteUiReduction]
