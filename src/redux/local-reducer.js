// @flow

import createReducer from './createReducer'
import { setLocalCase, deleteLocalCase } from './local-cases'

const localReducer = createReducer([setLocalCase, deleteLocalCase])

export default localReducer
