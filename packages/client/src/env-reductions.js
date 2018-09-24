// @flow

import curryRight from 'lodash.curryright'

export const disableIsSsrRender = (envState: Object) => ({ ...envState, isSsrRender: false })

export const setIsOnline = curryRight((envState: Object, isOnline: boolean) => ({
  ...envState,
  isOnline,
}))
