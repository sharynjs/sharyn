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

export const delAsyncEntry = (param1: any, param2?: any): any => {
  if (!param1) {
    throw Error('delAsyncEntry() requires key and state arguments')
  }
  if (typeof param1 === 'string' && typeof param2 === 'object' && param2 !== null) {
    return del(param2, param1)
  }
  if (typeof param1 === 'string' && !param2) {
    return (x: Object) => {
      if (!x) {
        throw Error("You called delAsyncEntry('foo')(state) with an undefined state")
      }
      return del(x, param1)
    }
  }
  throw Error('Incorrect parameters for delAsyncEntry()')
}

export const clearAsync = (param1?: any, param2?: any): any => {
  if (typeof param1 === 'string' && typeof param2 === 'object' && param2 !== null) {
    return { [param1]: param2[param1] }
  }
  if (typeof param1 === 'string' && !param2) {
    return (x: Object) => {
      if (!x) {
        throw Error("You called clearAsync('foo')(state) with an undefined state")
      }
      // flow-disable-next-line
      return { [param1]: x[param1] }
    }
  }
  return {}
}
