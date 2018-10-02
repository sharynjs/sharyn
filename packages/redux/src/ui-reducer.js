// @flow

import createReducer from './create-reducer'
import { dismissFirstNotificationCase, notifyCase, notifyMultipleCase } from './ui-cases'

const uiReducer = createReducer([dismissFirstNotificationCase, notifyCase, notifyMultipleCase], {
  notifications: [],
})

export default uiReducer
