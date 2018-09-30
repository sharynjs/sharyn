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
  setAsyncTrueReduction,
  setAsyncPageTrueReduction,
  delAsyncPageReduction,
  delAsyncReductionFromAsyncKeyProp,
  clearAsyncExceptPageReduction,
} from './async-reductions'

export const asyncNavigationCase = [SHARYN_NAVIGATION, clearAsyncExceptPageReduction]

export const asyncFetchPageRequestCase = [SHARYN_FETCH_PAGE_REQUEST, setAsyncPageTrueReduction]

export const asyncAsyncRequestCase = [SHARYN_ASYNC_REQUEST, setAsyncTrueReduction]

export const asyncAsyncSuccessOrFailureCase = [
  [SHARYN_ASYNC_SUCCESS, SHARYN_ASYNC_FAILURE],
  delAsyncReductionFromAsyncKeyProp,
]

export const asyncFetchPageSuccessOrFailureCase = [
  [SHARYN_FETCH_PAGE_SUCCESS, SHARYN_FETCH_PAGE_FAILURE],
  delAsyncPageReduction,
]
