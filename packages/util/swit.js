const isEqual = require('lodash.isequal')

const swit = (value, ...cases) => {
  if (cases.length === 0) {
    throw Error('swit takes at least 2 parameters')
  }
  const lastCase = cases[cases.length - 1]

  let casesToTest
  let defaultCase
  if (Array.isArray(lastCase)) {
    casesToTest = cases
  } else {
    casesToTest = cases.slice(0, -1)
    defaultCase = cases[cases.length - 1]
  }

  const foundCase = casesToTest.find(c =>
    c.slice(0, -1).some(x => isEqual(x, value))
  )
  const caseToUse = foundCase ? foundCase[foundCase.length -1] : defaultCase
  return (
    caseToUse && (caseToUse instanceof Function ? caseToUse(value) : caseToUse)
  )
}

module.exports = swit
