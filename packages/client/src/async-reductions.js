// @flow

import curryRight from 'lodash.curryright'

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const setAsyncRequest = curryRight((asyncState: Object, key: string) => ({
  ...asyncState,
  [key]: REQUEST,
}))
export const setAsyncSuccess = curryRight((asyncState: Object, key: string) => ({
  ...asyncState,
  [key]: SUCCESS,
}))
export const setAsyncFailure = curryRight((asyncState: Object, key: string) => ({
  ...asyncState,
  [key]: FAILURE,
}))

export const delAsync = curryRight((asyncState: Object, key: string) => {
  const newAsyncState = { ...asyncState }
  delete newAsyncState[key]
  return newAsyncState
})

export const clearAsync = () => ({})
