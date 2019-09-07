const tryCatch = (tryFn, catchFn, finallyFn) => {
  if (!tryFn) {
    throw Error('tryCatch takes at least 1 argument')
  }

  if (tryFn && catchFn && finallyFn) {
    try {
      return tryFn()
    } catch (err) {
      return catchFn(err)
    } finally {
      finallyFn()
    }
  }
  if (tryFn && catchFn) {
    try {
      return tryFn()
    } catch (err) {
      return catchFn(err)
    }
  }
  if (tryFn && finallyFn) {
    try {
      return tryFn()
    } finally {
      finallyFn()
    }
  }
  if (tryFn) {
    try {
      return tryFn()
    }
    catch (err) {}
  }
}

module.exports = tryCatch
