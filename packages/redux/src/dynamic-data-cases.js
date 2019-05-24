// @flow

import {
  SHARYN_SET_DYNAMIC_DATA,
  SHARYN_DELETE_DYNAMIC_DATA,
  SHARYN_CLEAR_DYNAMIC_DATA,
} from './actions'
import {
  dynamicDataSetReduction,
  dynamicDataDeleteReduction,
  dynamicDataClearReduction,
} from './dynamic-data-reductions'

export const dynamicDataSetCase = [SHARYN_SET_DYNAMIC_DATA, dynamicDataSetReduction]

export const dynamicDataDeleteCase = [SHARYN_DELETE_DYNAMIC_DATA, dynamicDataDeleteReduction]

export const dynamicDataClearCase = [SHARYN_CLEAR_DYNAMIC_DATA, dynamicDataClearReduction]
