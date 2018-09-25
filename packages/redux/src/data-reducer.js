// @flow

// flow-disable-next-line
import swit from 'sharyn/util/swit'

import {
  dataAsyncSuccessOrFetchPageSuccessCase,
  dataNavigationOrFetchPageRequestCase,
  dataInvalidateFieldsCase,
  clearInvalidFieldsCase,
} from './data-cases'

const dataReducer = (dataState: Object = {}, { payload, type }: Object) =>
  swit(
    type,
    [
      dataAsyncSuccessOrFetchPageSuccessCase,
      dataNavigationOrFetchPageRequestCase,
      dataInvalidateFieldsCase,
      clearInvalidFieldsCase,
    ].map(c => c(dataState, payload)),
    dataState,
  )

export default dataReducer
