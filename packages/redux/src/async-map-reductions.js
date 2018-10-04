// @flow

import {
  asyncMapSetOperation,
  asyncMapDeleteOperation,
  asyncMapClearOperation,
} from './async-map-operations'

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const asyncMapSetTrueReduction = (key: string) => (state: Object) =>
  asyncMapSetOperation(state, key)
export const asyncMapSetPageTrueReduction = () => (state: Object) =>
  asyncMapSetOperation(state, 'page')
export const asyncMapSetTrueReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  asyncMapSetOperation(state, payload.asyncKey)

export const asyncMapSetRequestReduction = (key: string) => (state: Object) =>
  asyncMapSetOperation(state, key, REQUEST)
export const asyncMapSetRequestReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  asyncMapSetOperation(state, payload.asyncKey, REQUEST)

export const asyncMapSetSuccessReduction = (key: string) => (state: Object) =>
  asyncMapSetOperation(state, key, SUCCESS)
export const asyncMapSetSuccessReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  asyncMapSetOperation(state, payload.asyncKey, SUCCESS)

export const asyncMapSetFailureReduction = (key: string) => (state: Object) =>
  asyncMapSetOperation(state, key, FAILURE)
export const asyncMapSetFailureReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  asyncMapSetOperation(state, payload.asyncKey, FAILURE)

export const asyncMapSetCustomReductionFromProps = (payload: Object) => (state: Object) =>
  asyncMapSetOperation(state, payload.asyncKey, payload.asyncValue)

export const asyncMapDeleteReduction = (key: string) => (state: Object) =>
  asyncMapDeleteOperation(state, key)
export const asyncMapDeletePageReduction = () => (state: Object) =>
  asyncMapDeleteOperation(state, 'page')
export const asyncMapDeleteReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  asyncMapDeleteOperation(state, payload.asyncKey)

export const asyncMapClearExceptPageReduction = () => (state: Object) =>
  asyncMapClearOperation(state, 'page')
