// @flow

import createReducer from './createReducer'
import { offlineCase, onlineCase, startClientNavigationCase } from './env-cases'

const dataReducer = createReducer([offlineCase, onlineCase, startClientNavigationCase], {
  isOnline: true,
})

export default dataReducer
