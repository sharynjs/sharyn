// @flow

import { SHARYN_DISMISS_FIRST_NOTIFICATION, SHARYN_NOTIFY, SHARYN_NOTIFY_MULTIPLE } from './actions'
import {
  addOneNotificationReduction,
  addMultipleNotificationsReduction,
  removeFirstNotificationReduction,
} from './ui-reductions'

export const dismissFirstNotificationCase = [
  SHARYN_DISMISS_FIRST_NOTIFICATION,
  removeFirstNotificationReduction,
]

export const notifyCase = [SHARYN_NOTIFY, addOneNotificationReduction]

export const notifyMultipleCase = [SHARYN_NOTIFY_MULTIPLE, addMultipleNotificationsReduction]
