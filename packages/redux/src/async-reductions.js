// @flow

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

const del = (obj, key) => {
  const newObj = { ...obj }
  delete newObj[key]
  return newObj
}

export const setAsyncHelper = (state: Object, key: string, value?: mixed = true) => ({
  ...state,
  [key]: value,
})

export const setAsyncTrueReduction = (key: string) => (state: Object) => setAsyncHelper(state, key)
export const setAsyncPageTrueReduction = () => (state: Object) => setAsyncHelper(state, 'page')
export const setAsyncTrueReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  setAsyncHelper(state, payload.asyncKey)

export const setAsyncRequestReduction = (key: string) => (state: Object) =>
  setAsyncHelper(state, key, REQUEST)
export const setAsyncRequestReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  setAsyncHelper(state, payload.asyncKey, REQUEST)

export const setAsyncSuccessReduction = (key: string) => (state: Object) =>
  setAsyncHelper(state, key, SUCCESS)
export const setAsyncSuccessReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  setAsyncHelper(state, payload.asyncKey, SUCCESS)

export const setAsyncFailureReduction = (key: string) => (state: Object) =>
  setAsyncHelper(state, key, FAILURE)
export const setAsyncFailureReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  setAsyncHelper(state, payload.asyncKey, FAILURE)

export const setAsyncCustomReductionFromProps = (payload: Object) => (state: Object) =>
  setAsyncHelper(state, payload.asyncKey, payload.asyncValue)

export const delAsyncHelper = (state: Object, key: string): any => del(state, key)

export const delAsyncReduction = (key: string) => (state: Object) => delAsyncHelper(state, key)
export const delAsyncPageReduction = () => (state: Object) => delAsyncHelper(state, 'page')
export const delAsyncReductionFromAsyncKeyProp = (payload: Object) => (state: Object) =>
  delAsyncHelper(state, payload.asyncKey)

export const clearAsyncHelper = (state: Object, key?: string) =>
  typeof key === 'string' ? { [key]: state[key] } : {}

export const clearAsyncExceptPageReduction = () => (state: Object) =>
  clearAsyncHelper(state, 'page')
