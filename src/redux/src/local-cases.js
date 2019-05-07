// @flow

import { SHARYN_SET_LOCAL, SHARYN_DELETE_LOCAL } from './actions'
import { setLocalReduction, deleteLocalReduction } from './local-reductions'

export const setLocalCase = [SHARYN_SET_LOCAL, setLocalReduction]

export const deleteLocalCase = [SHARYN_DELETE_LOCAL, deleteLocalReduction]
