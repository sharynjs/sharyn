let globalObject = {}

exports.setGlobal = (key, value) => {
  globalObject[key] = value
}

exports.getGlobal = key => globalObject[key]

exports.getAllGlobal = () => globalObject

exports.deleteGlobal = key => {
  delete globalObject[key]
}

exports.clearGlobal = () => {
  globalObject = {}
}
