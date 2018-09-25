// @flow

import {
  SHARYN_ASYNC_SUCCESS,
  SHARYN_FETCH_PAGE_REQUEST,
  SHARYN_FETCH_PAGE_SUCCESS,
  SHARYN_INVALIDATE_FIELDS,
  SHARYN_CLEAR_INVALID_FIELDS,
  SHARYN_NAVIGATION,
} from './actions'
import { addData, delData, clearData } from './data-reductions'

export const dataAsyncSuccessOrFetchPageSuccessCase = (dataState: Object, payload: Object) => [
  [SHARYN_FETCH_PAGE_SUCCESS, SHARYN_ASYNC_SUCCESS],
  () => addData(dataState, payload.data),
]

// eslint-disable-next-line no-unused-vars
export const dataNavigationOrFetchPageRequestCase = (dataState?: any, payload?: any) => [
  [SHARYN_NAVIGATION, SHARYN_FETCH_PAGE_REQUEST],
  () => clearData(),
]

export const dataInvalidateFieldsCase = (dataState: Object, payload: Object) => [
  SHARYN_INVALIDATE_FIELDS,
  () => addData(dataState, { invalidFields: payload }),
]

// eslint-disable-next-line no-unused-vars
export const clearInvalidFieldsCase = (dataState: Object, payload?: any) => [
  SHARYN_CLEAR_INVALID_FIELDS,
  () => delData('invalidFields')(dataState),
]
