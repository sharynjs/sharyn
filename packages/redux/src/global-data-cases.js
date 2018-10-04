// @flow

import { SHARYN_SET_GLOBAL_DATA, SHARYN_DELETE_GLOBAL_DATA } from './actions'
import { globalDataSetReduction, globalDataDeleteReduction } from './global-data-reductions'

export const globalDataSetCase = [SHARYN_SET_GLOBAL_DATA, globalDataSetReduction]

export const globalDataDeleteCase = [SHARYN_DELETE_GLOBAL_DATA, globalDataDeleteReduction]
