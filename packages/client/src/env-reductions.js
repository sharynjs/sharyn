// @flow

import curryRight from 'lodash.curryright'

export const disableIsFirstRender = (envState: Object) => ({ ...envState, isFirstRender: false })

export const setIsOnline = curryRight((envState: Object, isOnline: boolean) => ({
  ...envState,
  isOnline,
}))
