// @flow

/* eslint-disable no-empty, global-require, import/no-dynamic-require */

const requireSharyn = (moduleName: string) => {
  let module

  try {
    // flow-disable-next-line
    module = require(`@sharyn/${moduleName}`)
  } catch (e) {}

  if (!module) {
    try {
      // flow-disable-next-line
      module = require(`sharyn/${moduleName}`)
    } catch (e) {}
  }

  return module
}

export default requireSharyn
