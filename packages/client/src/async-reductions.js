// @flow

import curryRight from 'lodash.curryright'

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const setAsyncEntry = curryRight((asyncState: Object, key: string, value: string) => ({
  ...asyncState,
  [key]: value,
}))

export const delAsyncEntry = curryRight((asyncState: Object, key: string) => {
  const newAsyncState = { ...asyncState }
  delete newAsyncState[key]
  return newAsyncState
})

export const clearAsync = () => ({})
