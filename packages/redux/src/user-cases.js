// @flow

import { SHARYN_LOG_USER_IN, SHARYN_LOG_USER_OUT } from './actions'
import { setUser, deleteUser } from './user-reductions'

export const loginCase = (envState?: any, payload: Object) => [
  SHARYN_LOG_USER_IN,
  () => setUser(payload),
]

// eslint-disable-next-line no-unused-vars
export const logoutCase = (envState?: any, payload?: any) => [
  SHARYN_LOG_USER_OUT,
  () => deleteUser(),
]
