// @flow

const del = (obj, key) => {
  const newObj = { ...obj }
  delete newObj[key]
  return newObj
}

export const asyncMapSetOperation = (state: Object, key: string, value?: mixed = true) => ({
  ...state,
  [key]: value,
})

export const asyncMapDeleteOperation = (state: Object, key: string): any => del(state, key)

export const asyncMapClearOperation = (state: Object, key?: string) =>
  typeof key === 'string' ? { [key]: state[key] } : {}
