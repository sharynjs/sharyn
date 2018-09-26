// @flow

// flow-disable-next-line
import swit from '@sharyn/util/swit'

import {
  dismissFirstNotificationCase,
  fetchPageOrAsyncFailureCase,
  fetchPageOrAsyncSuccessCase,
  notifyCase,
} from './ui-cases'

const initialState = { notifications: [] }

const uiReducer = (
  uiState: Object = initialState,
  { type, payload }: { type: string, payload: any },
) =>
  swit(
    type,
    [
      notifyCase,
      dismissFirstNotificationCase,
      fetchPageOrAsyncFailureCase,
      fetchPageOrAsyncSuccessCase,
    ].map(c => c(uiState, payload)),
    uiState,
  )

export default uiReducer
