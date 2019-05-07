// @flow

import createReducer from './create-reducer'
import { globalDataSetCase, globalDataDeleteCase } from './global-data-cases'

const globalDataReducer = createReducer([globalDataSetCase, globalDataDeleteCase])

export default globalDataReducer
