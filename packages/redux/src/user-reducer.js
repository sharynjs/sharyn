// @flow

import createReducer from './create-reducer'
import { loginCase, logoutCase } from './user-cases'

const userReducer = createReducer([loginCase, logoutCase], null)

export default userReducer
