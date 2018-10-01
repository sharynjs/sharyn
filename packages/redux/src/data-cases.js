// @flow

import {
  SHARYN_ASYNC_SUCCESS,
  SHARYN_FETCH_PAGE_REQUEST,
  SHARYN_FETCH_PAGE_SUCCESS,
  SHARYN_INVALIDATE_FIELDS,
  SHARYN_CLEAR_INVALID_FIELDS,
  SHARYN_NAVIGATION,
} from './actions'
import {
  addDataReductionFromDataProp,
  addInvalidFieldsDataReduction,
  clearInvalidFieldsReduction,
  clearDataReduction,
} from './data-reductions'

export const dataAsyncSuccessOrFetchPageSuccessCase = [
  [SHARYN_FETCH_PAGE_SUCCESS, SHARYN_ASYNC_SUCCESS],
  addDataReductionFromDataProp,
]

export const dataNavigationOrFetchPageRequestCase = [
  [SHARYN_NAVIGATION, SHARYN_FETCH_PAGE_REQUEST],
  clearDataReduction,
]

export const dataInvalidateFieldsCase = [SHARYN_INVALIDATE_FIELDS, addInvalidFieldsDataReduction]

export const clearInvalidFieldsCase = [SHARYN_CLEAR_INVALID_FIELDS, clearInvalidFieldsReduction]
