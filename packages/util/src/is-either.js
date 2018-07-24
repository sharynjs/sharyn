const isEither = (first, ...comparisons) => {
  if (!comparisons.length) {
    throw Error('isEither takes at least a second argument')
  }
  if (Array.isArray(comparisons[0])) {
    return comparisons[0].includes(first)
  }
  return comparisons.includes(first)
}

module.exports = isEither
