// @flow

import isInt from 'validator/lib/isInt'
import forOwn from 'lodash.forown'

const parseObject = (obj: Object, { integer: integerParam, toggle: toggleParam }: Object = {}) => {
  const parsedObject = {}

  let integerProperties
  if (typeof integerParam === 'string') {
    integerProperties = [integerParam]
  } else if (!integerParam) {
    integerProperties = []
  } else {
    integerProperties = integerParam
  }

  let toggleProperties
  if (typeof toggleParam === 'string') {
    toggleProperties = [toggleParam]
  } else if (!toggleParam) {
    toggleProperties = []
  } else {
    toggleProperties = toggleParam
  }

  forOwn(obj, (value, key) => {
    if (integerProperties.find(f => f === key)) {
      if (isInt(value)) {
        parsedObject[key] = Number(value)
      } else {
        throw Error(`Value '${value}' of integer property '${key}' is not an integer.`)
      }
    } else if (toggleProperties.find(f => f === key)) {
      if (value === 'on') {
        parsedObject[key] = true
      } else if (value) {
        throw Error(`Value '${value}' of toggle property '${key}' is not 'on'.`)
      }
    } else if (value !== '') {
      parsedObject[key] = value
    }
  })

  return parsedObject
}

export default parseObject
