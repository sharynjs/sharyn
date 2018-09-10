// @flow

import curryRight from 'lodash.curryright'

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

const del = (state, key) => {
  const newState = { ...state }
  delete newState[key]
  return newState
}

export const setAsyncRequest = curryRight((asyncState: Object, params: Object) => {
  if (params.useStatus === false && params.status) {
    throw Error('setAsyncRequest cannot have both a status option and a useStatus set to false')
  }
  return {
    ...asyncState,
    [params.key]: params.useStatus || params.status ? params.status ?? REQUEST : true,
  }
})

export const setAsyncSuccess = curryRight((asyncState: Object, params: Object) => {
  if (params.useStatus === false && params.status) {
    throw Error('setAsyncSuccess cannot have both a status option and a useStatus set to false')
  }
  return params.useStatus || params.status
    ? { ...asyncState, [params.key]: params.status ?? SUCCESS }
    : del(asyncState, params.key)
})

export const setAsyncFailure = curryRight((asyncState: Object, params: Object) => {
  if (params.useStatus === false && params.status) {
    throw Error('setAsyncFailure cannot have both a status option and a useStatus set to false')
  }
  return params.useStatus || params.status
    ? { ...asyncState, [params.key]: params.status ?? FAILURE }
    : del(asyncState, params.key)
})

export const delAsyncEntry = curryRight((asyncState: Object, key: string) => del(asyncState, key))

export const clearAsync = () => ({})
