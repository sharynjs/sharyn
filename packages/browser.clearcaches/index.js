/**
 * Clears all the [`caches`](https://developer.mozilla.org/en-US/docs/Web/API/Cache) used by service workers.
 * @parentpackage browser
 * @param {boolean} [reload=false] Reloads the page after emptying the caches.
 * @param {boolean} [hardReload=true] If `reload` is `true`, do a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Location/reload" target="_blank">forced reload</a>.
 * @returns {Promise}
 * @example
 * ```jsx
 * const UpdateBanner = () => (
 *   <div>
 *     A new version of the app is available!
 *     <a onClick={() => clearCaches(true)}>Click here to update</a>
 *   </div>
 * )
 * ```
 */
const clearCaches = async (reload = false, hardReload = true) => {
  if (caches && caches.keys && caches.delete) {
    const cacheKeys = await caches.keys()
    await Promise.all(cacheKeys.map(key => caches.delete(key)))
    if (reload) {
      window.location.reload(hardReload)
    }
  }
}

module.exports = clearCaches
