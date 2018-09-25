// @flow

import curryRight from 'lodash.curryright'

const del = (state, key) => {
  const newState = { ...state }
  delete newState[key]
  return newState
}

export const addData = curryRight((dataState: Object, newData?: Object) => ({
  ...dataState,
  ...newData,
}))

export const delData = (key: string): any => {
  if (!key) {
    throw Error('delData() requires a key argument')
  }
  if (typeof key === 'string') {
    return state => del(state, key)
  }
  throw Error('Incorrect parameters for delData()')
}

export const clearData = () => ({})
