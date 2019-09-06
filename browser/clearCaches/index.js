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
