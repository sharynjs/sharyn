// @flow

export const dynamicDataSetReduction = (payload: Object) => (state: Object) => ({
  ...state,
  ...payload,
})

export const dynamicDataDeleteReduction = (key: string) => (state: Object) => {
  const newState = { ...state }
  delete newState[key]
  return newState
}

export const dynamicDataClearReduction = () => () => ({})
