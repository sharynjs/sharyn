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
  pageDataAddReductionFromDataProp,
  pageDataClearReduction,
  pageDataAddInvalidFieldsReduction,
  pageDataClearInvalidFieldsReduction,
} from './page-data-reductions'

export const pageDataAsyncOrFetchPageSuccessCase = [
  [SHARYN_FETCH_PAGE_SUCCESS, SHARYN_ASYNC_SUCCESS],
  pageDataAddReductionFromDataProp,
]

export const pageDataNavigationOrFetchPageRequestCase = [
  [SHARYN_NAVIGATION, SHARYN_FETCH_PAGE_REQUEST],
  pageDataClearReduction,
]

export const pageDataInvalidateFieldsCase = [
  SHARYN_INVALIDATE_FIELDS,
  pageDataAddInvalidFieldsReduction,
]

export const pageDataClearInvalidFieldsCase = [
  SHARYN_CLEAR_INVALID_FIELDS,
  pageDataClearInvalidFieldsReduction,
]
