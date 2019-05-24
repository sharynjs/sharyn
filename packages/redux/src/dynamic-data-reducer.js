// @flow

import createReducer from './create-reducer'
import {
  dynamicDataSetCase,
  dynamicDataDeleteCase,
  dynamicDataClearCase,
} from './dynamic-data-cases'

const dynamicDataReducer = createReducer([
  dynamicDataSetCase,
  dynamicDataDeleteCase,
  dynamicDataClearCase,
])

export default dynamicDataReducer
