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
import { clearAsync, delAsyncEntry, setAsyncRequest } from './async-reductions'

// eslint-disable-next-line no-unused-vars
export const asyncNavigationCase = (asyncState: Object, payload?: any) => [
  SHARYN_NAVIGATION,
  () => clearAsync('page')(asyncState),
]

// eslint-disable-next-line no-unused-vars
export const asyncFetchPageRequestCase = (asyncState: Object, payload?: any) => [
  SHARYN_FETCH_PAGE_REQUEST,
  () => setAsyncRequest(asyncState, { key: 'page' }),
]

export const asyncAsyncRequestCase = (asyncState: Object, payload: string) => [
  SHARYN_ASYNC_REQUEST,
  () => setAsyncRequest(asyncState, { key: payload }),
]

export const asyncAsyncSuccessOrFailureCase = (asyncState: Object, payload: Object) => [
  [SHARYN_ASYNC_SUCCESS, SHARYN_ASYNC_FAILURE],
  () => delAsyncEntry(payload.asyncKey)(asyncState),
]

// eslint-disable-next-line no-unused-vars
export const asyncFetchPageSuccessOrFailureCase = (asyncState: Object, payload?: any) => [
  [SHARYN_FETCH_PAGE_SUCCESS, SHARYN_FETCH_PAGE_FAILURE],
  () => delAsyncEntry('page')(asyncState),
]
