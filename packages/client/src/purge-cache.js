// @flow

const purgeCache = async () => {
  if (caches && caches.keys && caches.delete) {
    const cacheKeys = await caches.keys()
    await Promise.all(cacheKeys.map(key => caches.delete(key)))
    window.location.reload(true)
  }
}

export default purgeCache
