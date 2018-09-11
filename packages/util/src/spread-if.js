// @flow

const spreadIf = (cond: Function, ...rest: any): any => {
  const condResult = cond instanceof Function ? cond() : cond
  // Arrays cases
  if (Array.isArray(rest[0])) {
    return condResult ? rest[0] : []
  }
  if (rest.length > 1) {
    return condResult ? rest : []
  }
  // Object case
  if (typeof rest[0] === 'object' && rest[0] !== null) {
    return condResult ? rest[0] : {}
  }
  // One param case
  return condResult ? [rest[0]] : []
}

export default spreadIf
