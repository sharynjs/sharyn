/**
 * An inline `try` / `catch` / `finally` function, which returns the result of the `try` or `catch` case.
 * @parentpackage util
 * @param {Function} tryFn The `try` instructions in a function.
 * @param {Function} [catchFn] The `catch` instructions in a function. Called with the error.
 * @param {Function} [finallyFn] The `finally` instructions in a function.
 * @returns {any} What your `tryFn` or `catchFn` functions return.
 * @example
 * ```js
 * tryCatch(() => success()) // some result
 * tryCatch(() => failure()) // undefined
 * tryCatch(() => failure(), err => err) // the error
 * tryCatch(() => failure(), () => {}) // undefined
 * tryCatch(() => whatever(), () => {}, () => cleanup())
 * ```
 *
 * Is is particularly useful to avoid this pattern of assigning a variable inside the `try` block:
 *
 * ```js
 * let result
 * try {
 *   result = somethingRisky()
 * } catch (e) {
 *   handleError(e)
 * }
 * ```
 *
 * Which can be replaced by one line:
 *
 * ```js
 * const result = tryCatch(() => somethingRisky(), e => handleError(e))
 * ```
 *
 * Please note that `tryCatch` may affect the linting or type-checking of that code compared to using a real `try` / `catch` block.
 */
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
      // eslint-disable-next-line no-empty
    } catch (err) {}
  }
}

module.exports = tryCatch
