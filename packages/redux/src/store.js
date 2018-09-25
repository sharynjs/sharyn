// @flow

// flow-disable-next-line
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
// flow-disable-next-line
import thunk from 'redux-thunk'

import asyncReducer from './async-reducer'
import envReducer from './env-reducer'
import dataReducer from './data-reducer'

const createSharynStore = ({
  preloadedState,
  isDevEnv,
}: {
  preloadedState?: Object,
  isDevEnv?: boolean,
}) => {
  const composeEnhancers = (isDevEnv && window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const composedEnhancers = composeEnhancers(applyMiddleware(thunk))

  createStore(
    combineReducers({
      async: asyncReducer,
      data: dataReducer,
      env: envReducer,
      ui: (s = {}) => s,
      user: (s = null) => s,
    }),
    preloadedState ?? composedEnhancers,
    preloadedState ? composedEnhancers : undefined,
  )
}

export default createSharynStore
