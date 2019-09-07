const wait = (ms = 1000) => new Promise(_ => setTimeout(_, ms))

module.exports = wait
