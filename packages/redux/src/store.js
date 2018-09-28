// @flow

// flow-disable-next-line
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
// flow-disable-next-line
import thunk from 'redux-thunk'
// flow-disable-next-line
import persistState from 'redux-localstorage'

import defaultAsyncReducer from './async-reducer'
import defaultDataReducer from './data-reducer'
import defaultEnvReducer from './env-reducer'
import defaultUiReducer from './ui-reducer'
import defaultUserReducer from './user-reducer'

const createSharynStore = (options?: {
  preloadedState?: Object,
  isDevEnv?: boolean,
  persistUser?: boolean,
  asyncReducer?: Function,
  dataReducer?: Function,
  envReducer?: Function,
  uiReducer?: Function,
  userReducer?: Function,
}) => {
  const composeEnhancers =
    (options?.isDevEnv && window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const composedEnhancers = composeEnhancers(
    applyMiddleware(thunk),
    options?.persistUser ? persistState('user') : x => x,
  )

  return createStore(
    combineReducers({
      async: options?.asyncReducer ?? defaultAsyncReducer,
      data: options?.dataReducer ?? defaultDataReducer,
      env: options?.envReducer ?? defaultEnvReducer,
      ui: options?.uiReducer ?? defaultUiReducer,
      user: options?.userReducer ?? defaultUserReducer,
    }),
    options?.preloadedState ?? composedEnhancers,
    options?.preloadedState ? composedEnhancers : undefined,
  )
}

export default createSharynStore
