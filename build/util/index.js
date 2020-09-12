const { getGlobal, setGlobal, getAllGlobal, deleteGlobal, clearGlobal } = require('./global')

module.exports = {
  between: require('./between'),
  cycle: require('./cycle'),
  defined: require('./defined'),
  either: require('./either'),
  exists: require('./exists'),
  ifs: require('./ifs'),
  invoke: require('./invoke'),
  inlineThrow: require('./inlineThrow'),
  swit: require('./swit'),
  toggle: require('./toggle'),
  tryCatch: require('./tryCatch'),
  wait: require('./wait'),
  getGlobal,
  setGlobal,
  getAllGlobal,
  deleteGlobal,
  clearGlobal,
}
