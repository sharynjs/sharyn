const { useState } = require('react')
const cloneDeep = require('lodash.clonedeep')
const lodashMerge = require('lodash.merge')

const useStateObject = (initialStateObject = {}) => {
  const [stateObject, setStateObject] = useState(initialStateObject)

  const setAll = (obj = {}) => setStateObject(obj)
  const assign = obj => setStateObject(Object.assign({}, stateObject, obj))
  const merge = obj => setStateObject(lodashMerge({}, stateObject, obj))

  const set = (key, value) => {
    if (stateObject) {
      const newStateObject = cloneDeep(stateObject)
      newStateObject[key] = value
      setStateObject(newStateObject)
    } else {
      setStateObject({ [key]: value })
    }
  }

  const del = key => {
    if (stateObject) {
      const newStateObject = cloneDeep(stateObject)
      delete newStateObject[key]
      setStateObject(newStateObject)
    } else {
      return stateObject
    }
  }
  const clear = () => setStateObject({})

  return [stateObject, { setAll, assign, merge, set, del, clear }]
}

module.exports = useStateObject
