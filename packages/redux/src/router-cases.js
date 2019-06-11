// @flow

import { SHARYN_NAVIGATION, SHARYN_INITIAL_NAVIGATION } from './actions'
import { routerNavigationReduction } from './router-reductions'

export const routerNavigationCase = [[SHARYN_NAVIGATION], routerNavigationReduction]
export const routerInitialNavigationCase = [[SHARYN_INITIAL_NAVIGATION], routerNavigationReduction]
