// @flow

// flow-disable-next-line
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
// flow-disable-next-line
import thunk from 'redux-thunk'
// flow-disable-next-line
import persistState from 'redux-localstorage'

import defaultAsyncMapReducer from './async-map-reducer'
import defaultDynamicDataReducer from './dynamic-data-reducer'
import defaultGlobalDataReducer from './global-data-reducer'
import defaultPageDataReducer from './page-data-reducer'
import defaultEnvReducer from './env-reducer'
import defaultLocalReducer from './local-reducer'
import defaultRouterReducer from './router-reducer'
import defaultUiReducer from './ui-reducer'
import defaultUserReducer from './user-reducer'

const createSharynStore = ({
  preloadedState,
  isDevEnv,
  persistLocal,
  persistUser,
  asyncMapReducer = defaultAsyncMapReducer,
  globalDataReducer = defaultGlobalDataReducer,
  dynamicDataReducer = defaultDynamicDataReducer,
  pageDataReducer = defaultPageDataReducer,
  envReducer = defaultEnvReducer,
  localReducer = defaultLocalReducer,
  routerReducer = defaultRouterReducer,
  uiReducer = defaultUiReducer,
  userReducer = defaultUserReducer,
  extraReducers = {},
}: {
  preloadedState?: Object,
  isDevEnv?: boolean,
  persistLocal?: boolean,
  persistUser?: boolean,
  asyncMapReducer?: Function,
  dynamicDataReducer?: Function,
  globalDataReducer?: Function,
  pageDataReducer?: Function,
  envReducer?: Function,
  localReducer?: Function,
  routerReducer?: Function,
  uiReducer?: Function,
  userReducer?: Function,
  extraReducers?: Object,
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
      dynamicData: dynamicDataReducer,
      globalData: globalDataReducer,
      pageData: pageDataReducer,
      env: envReducer,
      ...(persistLocal ? { local: localReducer } : {}),
      ui: uiReducer,
      user: userReducer,
      router: routerReducer,
      ...extraReducers,
    }),
    preloadedState ?? composedEnhancers,
    preloadedState ? composedEnhancers : undefined,
  )
}

export default createSharynStore
