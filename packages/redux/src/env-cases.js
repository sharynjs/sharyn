// @flow

import { SHARYN_START_CLIENT_NAVIGATION, SHARYN_ONLINE, SHARYN_OFFLINE } from './actions'
import { disableIsServerRender, setIsOnline } from './env-reductions'

// eslint-disable-next-line no-unused-vars
export const startClientNavigationCase = (envState: Object, payload?: any) => [
  SHARYN_START_CLIENT_NAVIGATION,
  () => disableIsServerRender(envState),
]

// eslint-disable-next-line no-unused-vars
export const onlineCase = (envState: Object, payload?: any) => [
  SHARYN_ONLINE,
  () => setIsOnline(envState, true),
]

// eslint-disable-next-line no-unused-vars
export const offlineCase = (envState: Object, payload?: any) => [
  SHARYN_OFFLINE,
  () => setIsOnline(envState, false),
]
