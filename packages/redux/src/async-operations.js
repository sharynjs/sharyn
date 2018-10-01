// @flow

const del = (obj, key) => {
  const newObj = { ...obj }
  delete newObj[key]
  return newObj
}

export const setAsyncOperation = (state: Object, key: string, value?: mixed = true) => ({
  ...state,
  [key]: value,
})

export const delAsyncOperation = (state: Object, key: string): any => del(state, key)

export const clearAsyncOperation = (state: Object, key?: string) =>
  typeof key === 'string' ? { [key]: state[key] } : {}
