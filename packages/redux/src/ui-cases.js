// @flow

import {
  SHARYN_FETCH_PAGE_SUCCESS,
  SHARYN_FETCH_PAGE_FAILURE,
  SHARYN_ASYNC_SUCCESS,
  SHARYN_ASYNC_FAILURE,
  SHARYN_DISMISS_FIRST_NOTIFICATION,
  SHARYN_NOTIFY,
} from './actions'
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

export const fetchPageOrAsyncFailureCase = (uiState: Object, payload: Object) => [
  [SHARYN_FETCH_PAGE_FAILURE, SHARYN_ASYNC_FAILURE],
  () => addOneNotification(uiState, payload.notification),
]

export const fetchPageOrAsyncSuccessCase = (uiState: Object, payload: Object) => [
  [SHARYN_FETCH_PAGE_SUCCESS, SHARYN_ASYNC_SUCCESS],
  () => addMultipleNotifications(uiState, payload.notifications),
]
