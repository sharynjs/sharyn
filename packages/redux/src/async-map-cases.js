// @flow

import {
  SHARYN_ASYNC_REQUEST,
  SHARYN_ASYNC_SUCCESS,
  SHARYN_ASYNC_FAILURE,
  SHARYN_FETCH_PAGE_REQUEST,
  SHARYN_FETCH_PAGE_SUCCESS,
  SHARYN_FETCH_PAGE_FAILURE,
  SHARYN_NAVIGATION,
} from './actions'
import {
  asyncMapSetTrueReduction,
  asyncMapSetPageTrueReduction,
  asyncMapDeletePageReduction,
  asyncMapDeleteReductionFromAsyncKeyProp,
  asyncMapClearExceptPageReduction,
} from './async-map-reductions'

export const asyncMapNavigationCase = [SHARYN_NAVIGATION, asyncMapClearExceptPageReduction]

export const asyncMapFetchPageRequestCase = [
  SHARYN_FETCH_PAGE_REQUEST,
  asyncMapSetPageTrueReduction,
]

export const asyncMapAsyncRequestCase = [SHARYN_ASYNC_REQUEST, asyncMapSetTrueReduction]

export const asyncMapAsyncSuccessOrFailureCase = [
  [SHARYN_ASYNC_SUCCESS, SHARYN_ASYNC_FAILURE],
  asyncMapDeleteReductionFromAsyncKeyProp,
]

export const asyncMapFetchPageSuccessOrFailureCase = [
  [SHARYN_FETCH_PAGE_SUCCESS, SHARYN_FETCH_PAGE_FAILURE],
  asyncMapDeletePageReduction,
]
