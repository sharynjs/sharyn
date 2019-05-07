// @flow

import createReducer from './createReducer'
import { globalDataSetCase, globalDataDeleteCase } from './global-data-cases'

const globalDataReducer = createReducer([globalDataSetCase, globalDataDeleteCase])

export default globalDataReducer
