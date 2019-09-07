const html = (strings, ...expressions) =>
  expressions
    .reduce((acc, cur, i) => acc + cur + strings[i + 1], strings[0])
    .trim()

module.exports = html
