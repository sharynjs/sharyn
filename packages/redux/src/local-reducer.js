// @flow

import createReducer from './create-reducer'
import { setLocalCase, deleteLocalCase } from './local-cases'

const localReducer = createReducer([setLocalCase, deleteLocalCase])

export default localReducer
