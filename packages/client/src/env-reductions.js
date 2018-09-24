// @flow

import curryRight from 'lodash.curryright'

export const disableIsServerRender = (envState: Object) => ({ ...envState, isServerRender: false })

export const setIsOnline = curryRight((envState: Object, isOnline: boolean) => ({
  ...envState,
  isOnline,
}))
