// @flow

// flow-disable-next-line
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
// flow-disable-next-line
import thunk from 'redux-thunk'
// flow-disable-next-line
import persistState from 'redux-localstorage'

import defaultAsyncMapReducer from './async-map-reducer'
import defaultGlobalDataReducer from './global-data-reducer'
import defaultPageDataReducer from './page-data-reducer'
import defaultEnvReducer from './env-reducer'
import defaultLocalReducer from './local-reducer'
import defaultUiReducer from './ui-reducer'
import defaultUserReducer from './user-reducer'

const createSharynStore = ({
  preloadedState,
  isDevEnv,
  persistLocal,
  persistUser,
  asyncMapReducer = defaultAsyncMapReducer,
  globalDataReducer = defaultGlobalDataReducer,
  pageDataReducer = defaultPageDataReducer,
  envReducer = defaultEnvReducer,
  localReducer = defaultLocalReducer,
  uiReducer = defaultUiReducer,
  userReducer = defaultUserReducer,
}: {
  preloadedState?: Object,
  isDevEnv?: boolean,
  persistLocal?: boolean,
  persistUser?: boolean,
  asyncMapReducer?: Function,
  globalDataReducer?: Function,
  pageDataReducer?: Function,
  envReducer?: Function,
  localReducer?: Function,
  uiReducer?: Function,
  userReducer?: Function,
} = {}) => {
  const reducerKeysToPersist = []
  persistLocal && reducerKeysToPersist.push('local')
  persistUser && reducerKeysToPersist.push('user')
  const composeEnhancers = (isDevEnv && window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const composedEnhancers = composeEnhancers(
    applyMiddleware(thunk),
    reducerKeysToPersist.length ? persistState(reducerKeysToPersist) : x => x,
  )

  return createStore(
    combineReducers({
      asyncMap: asyncMapReducer,
      globalData: globalDataReducer,
      pageData: pageDataReducer,
      env: envReducer,
      ...(persistLocal ? { local: localReducer } : {}),
      ui: uiReducer,
      user: userReducer,
    }),
    preloadedState ?? composedEnhancers,
    preloadedState ? composedEnhancers : undefined,
  )
}

export default createSharynStore
