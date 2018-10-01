// @flow

import { setAsyncOperation, delAsyncOperation, clearAsyncOperation } from './async-operations'

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const setAsyncTrueReduction = (key: string) => (state: Object) =>
  setAsyncOperation(state, key)
export const setAsyncPageTrueReduction = () => (state: Object) => setAsyncOperation(state, 'page')
export const setAsyncTrueReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  setAsyncOperation(state, payload.asyncKey)

export const setAsyncRequestReduction = (key: string) => (state: Object) =>
  setAsyncOperation(state, key, REQUEST)
export const setAsyncRequestReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  setAsyncOperation(state, payload.asyncKey, REQUEST)

export const setAsyncSuccessReduction = (key: string) => (state: Object) =>
  setAsyncOperation(state, key, SUCCESS)
export const setAsyncSuccessReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  setAsyncOperation(state, payload.asyncKey, SUCCESS)

export const setAsyncFailureReduction = (key: string) => (state: Object) =>
  setAsyncOperation(state, key, FAILURE)
export const setAsyncFailureReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  setAsyncOperation(state, payload.asyncKey, FAILURE)

export const setAsyncCustomReductionFromProps = (payload: Object) => (state: Object) =>
  setAsyncOperation(state, payload.asyncKey, payload.asyncValue)

export const delAsyncReduction = (key: string) => (state: Object) => delAsyncOperation(state, key)
export const delAsyncPageReduction = () => (state: Object) => delAsyncOperation(state, 'page')
export const delAsyncReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  delAsyncOperation(state, payload.asyncKey)

export const clearAsyncExceptPageReduction = () => (state: Object) =>
  clearAsyncOperation(state, 'page')
