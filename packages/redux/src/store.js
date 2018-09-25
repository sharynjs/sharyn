// @flow

// flow-disable-next-line
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
// flow-disable-next-line
import thunk from 'redux-thunk'
// flow-disable-next-line
import persistState from 'redux-localstorage'

import asyncReducer from './async-reducer'
import envReducer from './env-reducer'
import dataReducer from './data-reducer'
import uiReducer from './ui-reducer'
import userReducer from './user-reducer'

const createSharynStore = (options?: {
  preloadedState?: Object,
  isDevEnv?: boolean,
  persistUser?: boolean,
}) => {
  const composeEnhancers =
    (options?.isDevEnv && window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const composedEnhancers = composeEnhancers(
    applyMiddleware(thunk),
    options?.persistUser ? persistState('user') : x => x,
  )

  return createStore(
    combineReducers({
      async: asyncReducer,
      data: dataReducer,
      env: envReducer,
      ui: uiReducer,
      user: userReducer,
    }),
    options?.preloadedState ?? composedEnhancers,
    options?.preloadedState ? composedEnhancers : undefined,
  )
}

export default createSharynStore
