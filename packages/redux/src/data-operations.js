// @flow

const del = (obj, key) => {
  const newObj = { ...obj }
  delete newObj[key]
  return newObj
}

export const addDataOperation = (dataState?: Object = {}, newData?: Object = {}) => ({
  ...dataState,
  ...newData,
})

export const delDataOperation = (state: Object, key: string): any => del(state, key)

export const clearDataOperation = () => ({})
