// @flow

export const globalDataSetReduction = (payload: Object) => (state: Object) => ({
  ...state,
  ...payload,
})

export const globalDataDeleteReduction = (key: string) => (state: Object) => {
  const newState = { ...state }
  delete newState[key]
  return newState
}
