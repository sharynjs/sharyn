// @flow

export const setLocalReduction = (payload: Object) => (state: Object) => ({ ...state, ...payload })

export const deleteLocalReduction = (key: string) => (state: Object) => {
  const newState = { ...state }
  delete newState[key]
  return newState
}
