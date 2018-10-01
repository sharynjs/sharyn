// @flow

import createReducer from './create-reducer'
import {
  dataAsyncSuccessOrFetchPageSuccessCase,
  dataNavigationOrFetchPageRequestCase,
  dataInvalidateFieldsCase,
  clearInvalidFieldsCase,
} from './data-cases'

const dataReducer = createReducer([
  dataAsyncSuccessOrFetchPageSuccessCase,
  dataNavigationOrFetchPageRequestCase,
  dataInvalidateFieldsCase,
  clearInvalidFieldsCase,
])

export default dataReducer
