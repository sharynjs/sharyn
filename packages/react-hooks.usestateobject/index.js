const { useState } = require('react')
const cloneDeep = require('lodash.clonedeep')
const lodashMerge = require('lodash.merge')

const useStateObject = (initialStateObject = {}) => {
  const [stateObject, setStateObject] = useState(initialStateObject)

  const getAll = () => stateObject
  const get = key => stateObject[key]

  const setAll = obj => setStateObject(obj)
  const assign = obj => setStateObject(Object.assign({}, stateObject, obj))
  const merge = obj => setStateObject(lodashMerge({}, stateObject, obj))

  const set = (key, value) => {
    const newStateObject = cloneDeep(stateObject)
    newStateObject[key] = value
    setStateObject(newStateObject)
  }

  const del = key => {
    const newStateObject = cloneDeep(stateObject)
    delete newStateObject[key]
    setStateObject(newStateObject)
  }
  const clear = () => setStateObject({})

  return { getAll, get, setAll, assign, merge, set, del, clear }
}

module.exports = useStateObject
