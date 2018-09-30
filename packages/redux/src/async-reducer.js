// @flow

import {
  asyncAsyncRequestCase,
  asyncAsyncSuccessOrFailureCase,
  asyncFetchPageRequestCase,
  asyncFetchPageSuccessOrFailureCase,
  asyncNavigationCase,
} from './async-cases'
import createReducer from './create-reducer'

const asyncReducer = createReducer([
  asyncAsyncRequestCase,
  asyncAsyncSuccessOrFailureCase,
  asyncFetchPageRequestCase,
  asyncFetchPageSuccessOrFailureCase,
  asyncNavigationCase,
])

export default asyncReducer
