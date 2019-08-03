// @flow

import lodashToString from 'lodash.tostring'

const toString = (val: any) => {
  if (val === undefined || val === null) {
    return val
  }
  return lodashToString(val)
}

export default toString
