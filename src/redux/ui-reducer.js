// @flow

import createReducer from './createReducer'
import {
  dismissFirstNotificationCase,
  notifyCase,
  notifyMultipleCase,
  setUiCase,
  deleteUiCase,
} from './ui-cases'

const uiReducer = createReducer(
  [dismissFirstNotificationCase, notifyCase, notifyMultipleCase, setUiCase, deleteUiCase],
  {
    notifications: [],
  },
)

export default uiReducer
