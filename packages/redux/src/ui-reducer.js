// @flow

// flow-disable-next-line
import swit from '@sharyn/util/swit'

import { dismissFirstNotificationCase, notifyCase, notifyMultipleCase } from './ui-cases'

const initialState = { notifications: [] }

const uiReducer = (
  uiState: Object = initialState,
  { type, payload }: { type: string, payload: any },
) =>
  swit(
    type,
    [dismissFirstNotificationCase, notifyCase, notifyMultipleCase].map(c => c(uiState, payload)),
    uiState,
  )

export default uiReducer
