// @flow

import createReducer from './createReducer'
import {
  pageDataAsyncOrFetchPageSuccessCase,
  pageDataNavigationOrFetchPageRequestCase,
  pageDataInvalidateFieldsCase,
  pageDataClearInvalidFieldsCase,
} from './page-data-cases'

const pageDataReducer = createReducer([
  pageDataAsyncOrFetchPageSuccessCase,
  pageDataNavigationOrFetchPageRequestCase,
  pageDataInvalidateFieldsCase,
  pageDataClearInvalidFieldsCase,
])

export default pageDataReducer
