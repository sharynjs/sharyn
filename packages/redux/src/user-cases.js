// @flow

import { SHARYN_LOG_USER_IN, SHARYN_LOG_USER_OUT } from './actions'
import { setUserReduction, deleteUserReduction } from './user-reductions'

export const loginCase = [SHARYN_LOG_USER_IN, setUserReduction]

export const logoutCase = [SHARYN_LOG_USER_OUT, deleteUserReduction]
