const invoke = (...functions) =>
  functions.length === 1 ? functions[0]() : functions.map(fn => fn())

module.exports = invoke
