// @flow

import {
  asyncMapAsyncRequestCase,
  asyncMapAsyncSuccessOrFailureCase,
  asyncMapFetchPageRequestCase,
  asyncMapFetchPageSuccessOrFailureCase,
  asyncMapNavigationCase,
} from './async-map-cases'
import createReducer from './create-reducer'

const asyncMapReducer = createReducer([
  asyncMapAsyncRequestCase,
  asyncMapAsyncSuccessOrFailureCase,
  asyncMapFetchPageRequestCase,
  asyncMapFetchPageSuccessOrFailureCase,
  asyncMapNavigationCase,
])

export default asyncMapReducer
