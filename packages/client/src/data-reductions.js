// @flow

import curryRight from 'lodash.curryright'

export const addData = curryRight((dataState: Object, newData?: Object) => ({
  ...dataState,
  ...newData,
}))
export const clearData = () => ({})
