let globalObject = {}

const setGlobal = (key, value) => {
  globalObject[key] = value
}

const getGlobal = key => globalObject[key]

const getAllGlobal = () => globalObject

const deleteGlobal = key => {
  delete globalObject[key]
}

const clearGlobal = () => {
  globalObject = {}
}

module.exports = {
  setGlobal,
  getGlobal,
  getAllGlobal,
  deleteGlobal,
  clearGlobal,
}
