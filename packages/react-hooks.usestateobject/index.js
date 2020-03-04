const { useState } = require('react')
const cloneDeep = require('lodash.clonedeep')
const lodashMerge = require('lodash.merge')

const useStateObject = (initialStateObject = {}) => {
  const [stateObject, setStateObject] = useState(initialStateObject)

  const setAll = (obj = {}) => {
    setStateObject(obj)
    return obj
  }

  const assign = obj => {
    const newStateObject = Object.assign({}, stateObject, obj)
    setStateObject(newStateObject)
    return newStateObject
  }

  const merge = obj => {
    const newStateObject = lodashMerge({}, stateObject, obj)
    setStateObject(newStateObject)
    return newStateObject
  }

  const set = (key, value) => {
    if (stateObject) {
      const newStateObject = cloneDeep(stateObject)
      newStateObject[key] = value
      setStateObject(newStateObject)
      return newStateObject
    } else {
      const newStateObject = { [key]: value }
      setStateObject(newStateObject)
      return newStateObject
    }
  }

  const del = key => {
    if (stateObject) {
      const newStateObject = cloneDeep(stateObject)
      delete newStateObject[key]
      setStateObject(newStateObject)
      return newStateObject
    } else {
      return stateObject
    }
  }

  const clear = () => {
    const newStateObject = {}
    setStateObject(newStateObject)
    return newStateObject
  }

  return [stateObject, { setAll, assign, merge, set, del, clear }]
}

module.exports = useStateObject
