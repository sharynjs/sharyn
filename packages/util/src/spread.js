// @flow

const spread = (param: any, ...rest: any) => {
  // Arrays cases
  if (Array.isArray(param)) {
    return param.filter(x => x !== undefined)
  }
  if (rest.length > 0) {
    return [param, ...rest].filter(x => x !== undefined)
  }
  // Object case
  if (typeof param === 'object' && param !== null) {
    const keys = Object.keys(param)
    const newObj = {}
    keys.forEach(key => {
      if (param[key] !== undefined) {
        newObj[key] = param[key]
      }
    })
    return newObj
  }
  // One param case
  return param !== undefined ? [param] : []
}

export default spread
