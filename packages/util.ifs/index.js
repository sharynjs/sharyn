const ifs = (...cases) => {
  if (cases.length === 0) {
    throw Error('ifs takes at least 1 parameter')
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
  const foundCase = casesToTest.find(c => (c[0] instanceof Function ? c[0]() : c[0]))
  const result = foundCase ? foundCase[1] : defaultCase
  return result && (result instanceof Function ? result() : result)
}

module.exports = ifs
