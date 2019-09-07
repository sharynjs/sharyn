const run = (...functions) =>
  functions.length === 1 ? functions[0]() : functions.map(fn => fn())

module.exports = run
