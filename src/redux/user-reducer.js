// @flow

import createReducer from './createReducer'
import { loginCase, logoutCase } from './user-cases'

const userReducer = createReducer([loginCase, logoutCase], null)

export default userReducer
