/**
 * A `Promise`-based delay.
 * @parentpackage util
 * @param {number} [milliseconds=1000] The duration of the wait.
 * @returns {Promise}
 * @example
 * ```js
 * const main = async () => {
 *   console.log('Legen - wait for it...')
 *   await wait(3000)
 *   console.log('...dary!')
 * }
 *
 * main()
 * ```
 */

const wait = (ms = 1000) => new Promise(_ => setTimeout(_, ms))

module.exports = wait
