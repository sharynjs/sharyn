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

export const delAsyncEntry = (key: string): any => {
  if (!key) {
    throw Error('delAsyncEntry() requires a key argument')
  }
  if (typeof key === 'string') {
    return state => del(state, key)
  }
  throw Error('Incorrect parameters for delAsyncEntry()')
}

export const clearAsync = (key?: string): any =>
  // flow-disable-next-line
  typeof key === 'string' ? state => ({ [key]: state[key] }) : {}
