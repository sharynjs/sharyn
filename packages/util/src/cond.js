// @flow

const cond = (cases: any[][], defaultCase?: any): any => {
  const foundCase = cases.find(c => {
    if (Array.isArray(c[0])) {
      return c[0]
    }
    return c[0]
  })

  const caseToUse = foundCase ? foundCase[1] : defaultCase

  return caseToUse && (caseToUse instanceof Function ? caseToUse() : caseToUse)
}

export default cond
