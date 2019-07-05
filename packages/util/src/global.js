// @flow

let globalObject = {}

export const setGlobal = (key: string, value: any) => {
  globalObject[key] = value
}

export const getGlobal = (key: string) => globalObject[key]

export const getAllGlobal = () => globalObject

export const deleteGlobal = (key: string) => {
  delete globalObject[key]
}

export const clearGlobal = () => {
  globalObject = {}
}
