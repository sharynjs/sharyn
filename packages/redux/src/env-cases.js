// @flow

import { SHARYN_START_CLIENT_NAVIGATION, SHARYN_ONLINE, SHARYN_OFFLINE } from './actions'
import { disableIsServerRenderReduction, onlineReduction, offlineReduction } from './env-reductions'

export const startClientNavigationCase = [
  SHARYN_START_CLIENT_NAVIGATION,
  disableIsServerRenderReduction,
]

export const onlineCase = [SHARYN_ONLINE, onlineReduction]

export const offlineCase = [SHARYN_OFFLINE, offlineReduction]
