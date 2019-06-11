// @flow

import createReducer from './create-reducer'
import { routerNavigationCase, routerInitialNavigationCase } from './router-cases'

const routerReducer = createReducer([routerNavigationCase, routerInitialNavigationCase], {
  location: {},
  match: {},
  lastAction: null,
})

export default routerReducer
