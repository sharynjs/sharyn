// @flow

import createReducer from './create-reducer'
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
