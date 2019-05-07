// @flow

const seq = (...funcs: Function[]) => funcs.forEach(func => func())

export default seq
