// @flow

import createReducer from './create-reducer'
import { offlineCase, onlineCase, startClientNavigationCase } from './env-cases'

const dataReducer = createReducer([offlineCase, onlineCase, startClientNavigationCase], {
  isOnline: true,
})

export default dataReducer
