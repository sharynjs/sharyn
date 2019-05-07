// @flow

const del = (obj, key) => {
  const newObj = { ...obj }
  delete newObj[key]
  return newObj
}

export const pageDataAddOperation = (state?: Object = {}, newData?: Object = {}) => ({
  ...state,
  ...newData,
})

export const pageDataDeleteOperation = (state: Object, key: string): any => del(state, key)

export const pageDataClearOperation = () => ({})
